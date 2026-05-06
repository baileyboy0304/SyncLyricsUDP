# SyncUDP Home Assistant Add-on

SyncUDP packages the SyncLyrics UDP variant as a local Home Assistant add-on.
This Phase 1 copy keeps the source application behavior intact except for the
container entrypoint and Home Assistant option mapping needed to start the app
inside the add-on container.

## Installation

1. Add this repository as a local Home Assistant add-on repository.
2. Install the **SyncLyrics (UDP Only)** add-on.
3. Configure the add-on options, including Spotify and optional metadata API
   credentials if you use those integrations.
4. Start the add-on and open `http://<home-assistant-host>:9012`.

The add-on uses host networking so the web UI defaults to port `9012`, HTTPS to
`9013`, and UDP audio input to `6056`.

## Persistent data

Runtime settings, caches, generated certificates, lyrics, album art, and logs are
stored in the Home Assistant add-on config mount (`/config`) and are not bundled
with this repository.
