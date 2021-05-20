window.buzzsprout = function() {
  return {
    podcasts: null,
    isLoading: false,

    fetchPlaylist() {
      this.isLoading = true;
      fetch(`https://eastmarshunited.org/.netlify/functions/buzzsprout`)
        .then(res => res.json())
        .then(data => {
          this.isLoading = false;
          this.podcasts = data;
        });
    }
  };
}