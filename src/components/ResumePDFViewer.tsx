const ResumePDFViewer = () => {
  const pdfUrl = "/KISHORE_RESUME_2.pdf";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden h-[calc(100vh-4rem)]">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title="Kishore Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePDFViewer;
