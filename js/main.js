function createCard(app) {
  return `
    <div class="card">
      ${app.imageUrl ? `<img src="${app.imageUrl}" alt="${app.name}" />` : ""}
      <h2>${app.name}</h2>
      
      <div class="badges">
        <img src="${Links.githubVersionBadge(
          app.githubIdentifier
        )}" alt="GitHub Version" class="badge" />
        
        ${
          app.packageId
            ? `<img
              src="${Links.googlePlayBadge(app.packageId)}"
              alt="Google Play Downloads"
              class="badge"
            />`
            : ""
        }
        ${
          app.githubIdentifier
            ? `<img
              src="${Links.githubReleasesCountBadge(app.githubIdentifier)}"
              alt="GitHub Downloads"
              class="badge"
            />`
            : ""
        }
          </div>
      
      <p>${app.shortDesc}</p>
      
      <div class="buttons">
        ${
          app.packageId
            ? `<a href="${Links.googlePlayURL(
                app.packageId
              )}" target="_blank"><i class="fab fa-google-play"></i></a>`
            : ""
        }
        <a href="${Links.windowsURL(
          app.githubIdentifier
        )}" target="_blank"><i class="fab fa-windows"></i></a>
        <a href="${Links.githubLink(
          app.githubIdentifier
        )}" target="_blank"><i class="fab fa-github"></i></a>
        ${
          app.fdroid
            ? `<a href="${Links.fdroidURl(
                app.fdroid
              )}" target="_blank"><i class="fa-brands fa-android"></i></a>`
            : ""
        }
      </div>
    </div>
  `;
}

// Display AppData objects as cards
const container = document.getElementById("body");
apps.forEach((app) => {
  container.innerHTML += createCard(app);
});
