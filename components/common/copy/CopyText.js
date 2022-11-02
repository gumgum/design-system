import { useState } from 'react';

export default function CopyText({ copyText, className }) {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div
            className={`gds-flex gds-flex--align-center gds-flex--justify-between gds-text--code ${className}`}>
            {copyText}
            {/* Bind our handler function to the onClick button property */}
            <button className="gds-text-button--light-grey" onClick={handleCopyClick}>
                {isCopied ? (
                    <i className="fas fa-clipboard"></i>
                ) : (
                    <i className="far fa-clipboard"></i>
                )}
            </button>
        </div>
    );
}
