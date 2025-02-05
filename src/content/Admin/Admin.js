const AdminData = {
  en: {
    title: "Admin - Create a Blog",
    InputTitle: "Blog Title:",
    InputSlug: "Slug:",
    InputAuthor: "Author:",
    InputTimeToRead: "Time To Read:",
    Image: "Cover Image:",
    Tags: "Blog Tags:",
    shortDesc: "Short Description:",
    MinutesToRead : "MIN Read",
    SubmitButtonText: "Submit",
    errors: {
      title: "Title is required",
      slug: "Slug is required",
      author: "Author is required",
      description: "Description is required",
      timeToRead: "Time to read field is required",
      validateTimeToRead: "Time to read field must be between 0 and 60 minutes",
      image: "Please upload the image",
      minTags: "Minimum 1 tag should be added",
      maxTags: "Maximum 10 tag is allowed",
      shortDesc: "Short description must be between 20 to 500 characters"
    },
  },
  fr: {
    title: "Admin - Créer un Blog",
    InputTitle: "Titre du Blog:",
    InputSlug: "Lien simplifié:", // Translated slug
    InputAuthor: "Auteur:",
    InputTimeToRead: "Il est temps de lire:",
    Image: "Image de couverture:",
    Tags: "Balises du blog:",
    shortDesc: "Brève description:",
    MinutesToRead : "minutes de lecture",
    SubmitButtonText: "Soumettre",
    errors: {
      title: "Le titre est requis",
      slug: "Le lien simplifié est requis",
      author: "L'auteur est requis",
      description: "La description est requise",
      timeToRead: "Le champ Temps de lecture est obligatoire",
      validateTimeToRead:
      "Le temps de lecture du champ doit être compris entre 0 et 60 minutes",
      image: "Veuillez télécharger l'image",
      minTags: "Au moins 1 balise doit être ajoutée",
      maxTags: "Un maximum de 10 balises est autorisé",
      shortDesc: "La brève description doit comporter entre 20 et 500 caractères"
    },
  },
};

export default AdminData;
