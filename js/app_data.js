class AppData {
  constructor({
    name,
    shortDesc,
    fullDesc = null,
    appStoreURL = null,
    githubIdentifier = null,
    imageUrl = null,
    packageId = null,
    fdroid = null,
  }) {
    this.name = name;
    this.shortDesc = shortDesc;
    this.fullDesc = fullDesc;
    this.appStoreURL = appStoreURL;
    this.githubIdentifier = githubIdentifier;
    this.imageUrl = imageUrl;
    this.packageId = packageId;
    this.fdroid = fdroid;
  }
}
