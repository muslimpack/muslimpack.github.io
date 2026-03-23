class AppData {
  constructor({
    name,
    shortDesc,
    slug = null,
    fullDesc = null,
    appStoreURL = null,
    githubIdentifier = null,
    imageUrl = null,
    packageId = null,
    fdroid = null,
    screenshots = [],
  }) {
    this.name = name;
    this.shortDesc = shortDesc;
    this.slug = slug || (name ? name.toLowerCase().replace(/\s+/g, "-") : null);
    this.fullDesc = fullDesc;
    this.appStoreURL = appStoreURL;
    this.githubIdentifier = githubIdentifier;
    this.imageUrl = imageUrl;
    this.packageId = packageId;
    this.fdroid = fdroid;
    this.screenshots = screenshots;
  }
}
