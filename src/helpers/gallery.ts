import { imageSize } from "image-size";

export interface IGalleryImage {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}

export const get_files_from_gallery = async (): Promise<IGalleryImage[]> => {
    try {
        const fs = require('fs');
        const path = require('path');
        const dir = path.join(process.cwd(), 'public/images/gallery');
        let files = fs.readdirSync(dir)
        // sort files by date where the latest file comes first
        files = files.sort((a: string, b: string) => {
            return fs.statSync(path.join(dir, b)).mtime.getTime
                - fs.statSync(path.join(dir, a)).mtime.getTime;
        }
        );

        return files.map((file: string) => {
            return ({
                src: `/images/gallery/${file}`,
                alt: file,
                height: imageSize(path.join(dir, file)).height,
                width: imageSize(path.join(dir, file)).width

            })
        }
        );
    }
    catch (error) {
        console.log(error);
        return [];
    }

}
