import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DropZone.css";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import axios from "axios";

function DropZone(props) {
	const history = useHistory();
	const [uploadedFile, setUploadedFile] = useState(null);
	const [isUploaded, setIsUploaded] = useState(false);
	const [isMerge, setIsMerge] = useState(false);
	const [isMerging, setIsMerging] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	// file upload handler
	// const fileHandler = (e) => {
	// 	// const files = Array.from(e.target.files);
	// 	// console.log(e.target.files);
	// 	// console.log(files);
	// 	// setUploadedFile(files);
	// 	console.log(e.target.files);

	// 	setUploadedFile(e.target.files);
	// };

	const fileHandler = (e) => {
		const data = new FormData();
		console.log(e.target.files);
		for (let x = 0; x < e.target.files.length; x++) {
			data.append("files", e.target.files[x]);
		}
		axios
			.post("https://pdf-converter-js.herokuapp.com/merge", data)
			.then((res) => {
				// then print response status
				if (res.status === 500) {
					alert("png/jpg/jpeg files only, please upload the correct files");
				}
				console.log(res.statusText);
				console.log(res);
			})
			.catch((err) => {
				if (err.response.status !== 200) {
					history.push("/");
					alert("png/jpg/jpeg files only, please upload the correct files");
				}
			});
		console.log(e.target.files[0].name);

		setUploadedFile(e.target.files);

		setIsUploaded(true);
		setTimeout(() => {
			setIsImageLoaded(true);
		}, 4000);
	};

	// onDragEndHandler
	const onDragEndHandler = (result) => {
		if (!result.destination) return;

		const items = Array.from(uploadedFile);

		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setUploadedFile(items);
	};

	const grid = 8;

	const getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		width: "250px",
		height: "250x",
		userSelect: "none",
		padding: grid * 2,
		margin: `20px ${grid}px 20px ${grid}px`,
		// change background colour if dragging

		// styles we need to apply on draggables
		...draggableStyle,
	});

	const getListStyle = (isDraggingOver) => ({
		background: isDraggingOver ? "lightblue" : "lightgrey",

		height: "350px",
		display: "flex",
		padding: grid,
		overflow: "auto",
	});

	// const uploadHandler = () => {
	// 	const data = new FormData();
	// 	for (let x = 0; x < selectedFile.length; x++) {
	// 		data.append("file", selectedFile[x]);
	// 	}

	// 	axios.post("http://localhost:8000/upload", data).then((res) => {
	// 		// then print response status
	// 		console.log(res.statusText);
	// 	});
	// };

	const mergeHandler = () => {
		const data = new FormData();
		console.log(uploadedFile);
		for (let x = 0; x < uploadedFile.length; x++) {
			data.append("files", uploadedFile[x]);
		}
		axios.post("https://pdf-converter-js.herokuapp.com/merge", data).then((res) => {
			// then print response status
			if (res.status === 500) {
				alert("png/jpg/jpeg files only, please upload the correct files");
			}
			console.log(res.statusText);
			console.log(res);
		});
		setIsMerging(true);
		setTimeout(() => {
			setIsMerge(true);
		}, 4000);
	};

	const downloadHandler = () => {
		axios.get("https://pdf-converter-js.herokuapp.com/download", { responseType: "arraybuffer" }).then((res) => {
			const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
			var link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "output.pdf");
			document.body.appendChild(link);
			link.click();
		});

		setIsUploaded(false);
	};
	console.log(uploadedFile);
	return (
		<div className="upload-container">
			<h1>JPG to PDF Converter</h1>
			{!isUploaded ? <></> : <div className="progress-bar" />}
			<div className="col-md-6">
				{!isUploaded ? (
					<form id="#" action="/merge" method="post" encType="multipart/form-data">
						<div className="files">
							<input type="file" id="file-input" name="files" className="form-control" multiple onChange={fileHandler} />
						</div>
					</form>
				) : (
					<div>
						{/* <div className="progressbar">{isUploaded ? <ProgressBar /> : <></>}</div> */}

						<div>
							<DragDropContext onDragEnd={onDragEndHandler}>
								<Droppable droppableId="droppable" direction="horizontal">
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											style={getListStyle(snapshot.isDraggingOver)}
											{...provided.droppableProps}
											className="list"
										>
											{Array.from(uploadedFile).map((file, index) => (
												<Draggable key={file.name} draggableId={file.name} index={index}>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
														>
															{isImageLoaded ? (
																<img src={require(`../assets/${file.name}`).default} alt="" width="200px" height="150px" />
															) : (
																<RotateLeftIcon />
															)}
															<p className="p">{file.name}</p>
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</DragDropContext>
						</div>

						{/* <div>
							<MergePage files={Array.from(uploadedFile)} />
						</div> */}
						{!isMerge ? (
							<button onClick={mergeHandler} className="btn merge-btn" disabled={isMerging || !isImageLoaded}>
								{!isMerging ? "Merge" : "Merging..."}
							</button>
						) : (
							<button onClick={downloadHandler} className="btn merge-btn">
								Download
							</button>
						)}
					</div>
				)}
			</div>

			{/* <button onClick={mergePage}>go to files</button> */}
		</div>
	);
}
export default DropZone;
