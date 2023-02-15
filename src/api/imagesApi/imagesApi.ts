const API_URL = import.meta.env.VITE_API_URL;

export const imagesApi = {
  getPrediction: async () => {
    // Normally we would POST the image to the API and get back a prediction,
    // but for the purposes of this demo, I'll just do a GET request.
    try {
      const response = await fetch(`${API_URL}/predict`);
      const parsedResponse = response.json();

      return { ...parsedResponse, createdAt: new Date().toISOString() };
    } catch (error) {
      console.error('Error getting prediction');
      return null;
    }
  },
};
