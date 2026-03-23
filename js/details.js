document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const appSlug = params.get("id");

  if (!appSlug) {
    window.location.href = "index.html";
    return;
  }

  const app = apps.find((a) => a.slug === appSlug);

  if (!app) {
    document.getElementById("app-content").innerHTML = `
            <div style="text-align: center; padding: 100px;">
                <i class="fas fa-exclamation-triangle fa-3x" style="color: var(--accent-gold);"></i>
                <h2 style="margin-top: 20px;">عذراً، التطبيق غير موجود</h2>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px; display: inline-block;">العودة للرئيسية</a>
            </div>
        `;
    return;
  }

  // Update Page Title
  document.title = `${app.name} - Muslimpack`;

  // Update Open Graph / Meta if needed (requires more complex SSR or JS meta update)

  let contentHtml = `
        <div class="app-header-large">
            ${
              app.imageUrl
                ? `<img src="${app.imageUrl}" alt="${app.name}" class="app-icon-large">`
                : `<div class="app-icon-large" style="display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);font-size:3rem;"><i class="fas fa-cube"></i></div>`
            }
            <div class="app-title-area">
                <h1>${app.name}</h1>
                <div class="badges" style="margin-bottom: 15px;">
                    <img src="${Links.githubVersionBadge(app.githubIdentifier)}" alt="GitHub version" class="badge">
                    <img src="${Links.githubReleasesCountBadge(app.githubIdentifier)}" alt="Total Downloads" class="badge">
                    ${
                      app.packageId
                        ? `<img src="${Links.googlePlayBadge(app.packageId)}" alt="Play Store Downloads" class="badge">`
                        : ""
                    }
                </div>
                <p class="app-description">${app.fullDesc || app.shortDesc}</p>
                
                <div class="download-section">
                    ${
                      app.appStoreURL
                        ? `<a href="${app.appStoreURL}" target="_blank" class="btn-download"><i class="fab fa-apple"></i> App Store</a>`
                        : ""
                    }
                    ${
                      app.packageId
                        ? `<a href="${Links.googlePlayURL(app.packageId)}" target="_blank" class="btn-download"><i class="fab fa-google-play"></i> Google Play</a>`
                        : ""
                    }
                    <a href="${Links.windowsURL(app.githubIdentifier)}" target="_blank" class="btn-download"><i class="fab fa-windows"></i> Windows</a>
                    <a href="${Links.githubLink(app.githubIdentifier)}" target="_blank" class="btn-download"><i class="fab fa-github"></i> GitHub</a>
                    ${
                      app.fdroid
                        ? `<a href="${Links.fdroidURl(app.fdroid)}" target="_blank" class="btn-download"><span class="svg-icon fdroid-icon"></span> F-Droid</a>`
                        : ""
                    }
                </div>
            </div>
        </div>

        <div class="app-details-grid">
            ${
              app.features && app.features.length > 0
                ? `
                <div class="details-section glass-panel">
                    <h2 class="section-title"><i class="fas fa-star"></i> أهم المميزات</h2>
                    <ul class="features-list">
                        ${app.features.map((f) => `<li>${f}</li>`).join("")}
                    </ul>
                </div>
            `
                : ""
            }

            ${
              app.changelog && app.changelog.length > 0
                ? `
                <div class="details-section glass-panel">
                    <h2 class="section-title"><i class="fas fa-bolt"></i> ما الجديد؟</h2>
                    <ul class="changelog-list">
                        ${app.changelog.map((c) => `<li>${c}</li>`).join("")}
                    </ul>
                </div>
            `
                : ""
            }
        </div>

        ${
          app.screenshots && app.screenshots.length > 0
            ? `
            <section class="screenshots-gallery">
                <h2 style="margin-bottom: 20px; font-weight: 700;">صور من التطبيق</h2>
                <div class="gallery-grid">
                    ${app.screenshots
                      .map(
                        (src) =>
                          `<img src="${src}" alt="${app.name} screenshot" loading="lazy">`,
                      )
                      .join("")}
                </div>
            </section>
        `
            : ""
        }
    `;

  document.getElementById("app-content").innerHTML = contentHtml;
});
