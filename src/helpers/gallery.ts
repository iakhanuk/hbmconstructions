export interface IGalleryImage {
    src: string;
    alt: string;
}

export const get_files_from_gallery = async (): Promise<IGalleryImage[]> => {
    try {
        const fs = require('fs');
        const path = require('path');
        const dir = path.join(process.cwd(), 'public/images/gallery');
        const files = fs.readdirSync(dir);

        return files.map((file: string) => {
            return ({
                src: `/images/gallery/${file}`,
                alt: file

            })
        }
        );
    }
    catch (error) {
        console.log(error);
        return [];
    }

}
