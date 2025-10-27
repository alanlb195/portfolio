import React, { useState } from "react";
import ImageModal from "./ImageModal";

export interface ImagePreviewerProps {
    urlImages: string[];
    children: React.ReactNode;
}

const ImagePreviewer: React.FC<ImagePreviewerProps> = ({ urlImages, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Children component - It can recibe anything and it acts as a Button when click */}
            <div onClick={() => setOpen(true)}>
                {children}
            </div>
            {/* Modal full page */}
            <ImageModal images={urlImages} open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default ImagePreviewer;
