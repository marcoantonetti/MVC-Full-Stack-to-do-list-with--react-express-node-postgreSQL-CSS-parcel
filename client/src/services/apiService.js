class apiService {
  static BASE_URL = "http://localhost:9000";

  static get = async ({ endPoint }) => {
    const url = `${apiService.BASE_URL}/${endPoint}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      throw error;
    }
  };

  static async post({ endPoint }, data) {
    const url = `${apiService.BASE_URL}/${endPoint}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const newData = response.json();
      return newData;
    } catch (error) {
      console.error(`Error posting data from ${url}:`, error);
      throw error;
    }
  }

  static async edit({ endPoint }, todo) {
    const url = `${apiService.BASE_URL}/todos/${endPoint}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      const data = response.json();
      return data;
    } catch (error) {
      console.error(`Error editing data from ${url}:`, error);
      throw error;
    }
  }

  static async delete({ endPoint }) {
    const url = `${apiService.BASE_URL}/todos/${endPoint}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      const data = response.json();
      return data;
    } catch (error) {
      console.error(`Error deleting data from ${url}:`, error);
      throw error;
    }
  }
}

export default apiService;
