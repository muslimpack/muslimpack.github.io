function createCard(app) {
  return `
    <article class="card" onclick="window.location.href='details.html?id=${app.slug}'" style="cursor: pointer;">
      ${
        app.imageUrl
          ? `<img src="${app.imageUrl}" alt="${app.name} icon" class="app-icon" loading="lazy" />`
          : `<div style="height:100%;display:flex;align-items:center;justify-content:center;opacity:0.3;font-size:3rem;"><i class="fas fa-cube"></i></div>`
      }

      <h2>${app.name}</h2>

      <div class="badges">
        <img src="${Links.githubVersionBadge(app.githubIdentifier)}" alt="GitHub Version" class="badge" />
        ${
          app.packageId
            ? `<img src="${Links.googlePlayBadge(app.packageId)}" alt="Google Play Downloads" class="badge" />`
            : ""
        }
        ${
          app.githubIdentifier
            ? `<img src="${Links.githubReleasesCountBadge(app.githubIdentifier)}" alt="GitHub Downloads" class="badge" />`
            : ""
        }
      </div>

      <p>${app.shortDesc}</p>

      <div class="buttons">
        <a href="details.html?id=${app.slug}" class="btn-more" aria-label="View details for ${app.name}" title="View Details">
            <i class="fas fa-info-circle"></i> التفاصيل
        </a>
        <div class="platforms">
            ${
              app.appStoreURL
                ? `<a href="${app.appStoreURL}" target="_blank" rel="noopener noreferrer" aria-label="Download ${app.name} from App Store" title="App Store"><i class="fab fa-apple"></i></a>`
                : ""
            }
            ${
              app.packageId
                ? `<a href="${Links.googlePlayURL(app.packageId)}" target="_blank" rel="noopener noreferrer" aria-label="Download ${app.name} from Google Play" title="Google Play"><i class="fab fa-google-play"></i></a>`
                : ""
            }
            <a href="${Links.githubLink(app.githubIdentifier)}" target="_blank" rel="noopener noreferrer" aria-label="View ${app.name} on GitHub" title="GitHub"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </article>
  `;
}

// Display AppData objects as cards
const container = document.getElementById("body");
if (container) {
  container.innerHTML = apps.map((app) => createCard(app)).join("");
}
