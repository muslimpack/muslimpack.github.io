class Links {
  // Github
  static kGithubBaseURl = "https://github.com/";
  static kGithubReleases = "https://img.shields.io/github/v/release";

  // Google Play
  static kGooglePlayDownloads =
    "https://PlayBadges.pavi2410.me/badge/downloads?id=";
  static kGooglePlayBaseURL = "https://play.google.com/store/apps/details?id=";
  static kFdroidBaseURL = "https://f-droid.org/packages/";

  // Methods

  static githubLink(githubIdentifier) {
    return Links.kGithubBaseURl + githubIdentifier;
  }

  static googlePlayURL(packageId) {
    return `${Links.kGooglePlayBaseURL}${packageId}`;
  }

  static windowsURL(packageId) {
    return `${Links.kGithubBaseURl}${packageId}/releases/latest`;
  }

  // Badges

  static githubVersionBadge(githubIdentifier) {
    return `${Links.kGithubReleases}${githubIdentifier}`;
  }

  static githubReleasesCountBadge(githubIdentifier) {
    return `https://img.shields.io/github/downloads${githubIdentifier}/total?color=brown&label=Downloads`;
  }

  static googlePlayBadge(packageId) {
    return `${Links.kGooglePlayDownloads}${packageId}`;
  }

  static fdroidURl(packageId) {
    return `${Links.kFdroidBaseURL}${packageId}`;
  }
}
