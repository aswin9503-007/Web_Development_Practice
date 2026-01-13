const BASE_URL = "https://appiventiv-backend.vercel.app/api";

const handleResponse = async (response) => {
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const api = {
  // --- HERO SECTION ---
  hero: {
    get: () => fetch(`${BASE_URL}/hero`).then(handleResponse),
    update: (data) =>
      fetch(`${BASE_URL}/hero`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(handleResponse),
  },

  // --- TRUST SECTION ---
  trust: {
    get: () => fetch(`${BASE_URL}/trust`).then(handleResponse),
    updateText: (data) =>
      fetch(`${BASE_URL}/trust/text`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(handleResponse),

    // Logo CRUD
    addLogo: (logo) =>
      fetch(`${BASE_URL}/trust/logo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image_url: logo.image_url,
          alt_text: logo.alt_text,
          sort_order: parseInt(logo.sort_order), // Ensure it's a number
        }),
      }).then(handleResponse),

    deleteLogo: (id) =>
      fetch(`${BASE_URL}/trust/logo/${id}`, {
        method: "DELETE",
      }).then(handleResponse),
  },

  // StatsSection
  
  stats: {
    getAll: () => fetch(`${BASE_URL}/stats`).then(handleResponse),
    add: (data) =>
      fetch(`${BASE_URL}/stats`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id, data) =>
      fetch(`${BASE_URL}/stats/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id) =>
      fetch(`${BASE_URL}/stats/${id}`, {
        method: "DELETE",
      }).then(handleResponse),
  },
};
