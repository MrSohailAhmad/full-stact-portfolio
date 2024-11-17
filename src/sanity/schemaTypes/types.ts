export type MyData = {
  _id: string; // Sanity automatically generates an ID for documents
  _type: "myData"; // Matches the name of the document type
  name: string;
  position: string;
  image: string;
  email: string;
  phone: string;
  location: string;
  dob: string;
  pdfFile?: string;
};

export type aboutData = {
  _id: string; // Sanity automatically generates an ID for documents
  _type: "myData"; // Matches the name of the document type
  title: string;
  para1: string;
  para2: string;
  para3: string;
};
