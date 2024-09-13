function createCard(app) {
  return `
    <div class="card">
      ${app.imageUrl ? `<img src="${app.imageUrl}" alt="${app.name}" />` : ""}
      <h2>${app.name}</h2>
      
      <div class="badges">
        <img src="${Links.githubVersionBadge(
          app.githubIdentifier
        )}" alt="GitHub Version" class="badge" />
        
        <img src="${Links.googlePlayBadge(
          app.packageId
        )}" alt="Google Play Downloads" class="badge" />
      </div>
      
      <p>${app.shortDesc}</p>
      
      <div class="buttons">
        <a href="${Links.googlePlayURL(
          app.packageId
        )}" target="_blank" class="fab fa-google-play"></a>
        <a href="${Links.windowsURL(
          app.githubIdentifier
        )}" target="_blank" class="fab fa-windows"></a>
        <a href="${Links.githubLink(
          app.githubIdentifier
        )}" target="_blank" class="fab fa-github"></a>
      </div>
    </div>
  `;
}

// Display AppData objects as cards
const container = document.getElementById("body");
apps.forEach((app) => {
  container.innerHTML += createCard(app);
});