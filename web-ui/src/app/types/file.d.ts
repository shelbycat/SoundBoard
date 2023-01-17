declare namespace Data {
  /** Any sort of image, soundbite, or otherwise that needs to be stored. */
  interface File {
    /** Unique Identifier */
    uuid: string;
    /** file path, including extension */
    name: string;
    /** mimetype */
    type: string;
  }
  interface Image {
    source: string;
    filename: string;
  }
}
