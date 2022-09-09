const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
      res.arrayBuffer()
    );
}
const pdfDoc = await PDFDocument.load(existingPdfBytes);
pdfDoc.registerFontkit(fontkit);
//get font
const fontBytes = await fetch("Sanchez-Regular.ttf").then((res) =>
  res.arrayBuffer()
);

// Embed our custom font in the document
const SanChezFont  = await pdfDoc.embedFont(fontBytes);
// Get the first page of the document
const pages = pdfDoc.getPages();
const firstPage = pages[0];
 
// Draw a string of text diagonally across the first page
firstPage.drawText(name, {
    x: 300,
    y: 270,
    size: 58,
    font: SanChezFont ,
    color: rgb(0.2, 0.84, 0.67),
})