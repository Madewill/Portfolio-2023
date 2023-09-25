import React, { useState } from 'react';

function DownloadButton() {
    const [loading, setLoading] = useState(false);

    const handleDownloadClick = () => {
        // Check if the download is already in progress
        if (loading) {
            return;
        }

        // Set loading state to true to disable the button during download
        setLoading(true);

        // Replace 'your-file-name.ext' with the actual file name in your assets folder
        const fileName = 'Resume';

        // Construct the file path
        const filePath = `/assets/${fileName}`;

        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = filePath;
        anchor.download = fileName;

        // Simulate a click on the anchor element to trigger the download
        document.body.appendChild(anchor);
        anchor.click();

        // Clean up and reset loading state after the download
        document.body.removeChild(anchor);
        setLoading(false);
    };

    return (
        <button
            type='button'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            onClick={handleDownloadClick}
            disabled={loading}
        >
            {loading ? 'Downloading...' : 'Download'}
        </button>
    );
}

export default DownloadButton;
