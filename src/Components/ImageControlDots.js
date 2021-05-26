export const ImageControlDots = ({images, switchImg, displayedImg }) => {
    return (<div className="image-control-dots">
       {images.map((image, i) => <button
                                    id={image.src}
                                    key={"dot" + i}
                                    className="dot"
                                    onClick={switchImg}
                                    style={{backgroundColor: displayedImg.src === image.src ? "black" : "gray"}}
                                ></button>)}
    </div>)
}