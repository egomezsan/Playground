export interface SpotifyItem {
    images: Image[];
    name: string;
    artists?: Artist[];
    id?: string;
    type: string;
    uri: string;
}

interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Artist {
    id: string;
    name: string;
    type: string;
    uri: string;
    images: Image[];
    external_urls: {spotify: string};
}

export interface Track {
    id: string;
    album: SpotifyItem;
    artists: Artist[];
    name: string;
    track_number: number;
    type: string;
    external_urls: {spotify: string};
    preview_url: string;
    uri: string;
}
