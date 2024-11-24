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
  pdfFile?: {
    // pdfFile is now an object with a file type and asset reference
    _type: "file"; // Sanity file type
    asset: {
      _ref: string; // Reference to the file
      _type: "reference"; // Sanity reference type
    };
  };
};

export type aboutData = {
  _id: string; // Sanity automatically generates an ID for documents
  _type: "myData"; // Matches the name of the document type
  title: string;
  para1: string;
  para2: string;
  para3: string;
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
export type Skill = {
  skillIcon: string;
  skill: string;
  color: string;
};
