import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Upload = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:4000/api/uploads", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log(response.data);
            alert("File uploaded successfully!");

            setUploadedFile(`http://localhost:4000/${response.data.file.path}`);

            navigate("/contact");
        } catch (error) {
            console.log("Upload Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex flex-col items-center my-20 bg-slate-500 w-1/2 mx-auto py-6">
            <p className="text-xl font-semibold">Upload your file</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                <label className="flex flex-col gap-y-2">
                    <span>Choose a file</span>
                    <input
                        type="file"
                        accept="*/*"
                        className="py-2 px-3 outline-none"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <button type="submit" className="border py-1 rounded-sm bg-green-500 text-white px-3">
                    Submit
                </button>
            </form>
            {uploadedFile && (
                <div className="mt-5">
                    <p className="text-lg font-semibold">Uploaded File:</p>
                    {uploadedFile.endsWith(".png") || uploadedFile.endsWith(".jpg") || uploadedFile.endsWith(".jpeg") ? (
                        <img src={uploadedFile} alt="Uploaded" className="w-40 h-40 object-cover mt-2" />
                    ) : (
                        <a href={uploadedFile} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2">
                            View Uploaded File
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default Upload;
