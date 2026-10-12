function FindProxyForURL(url, host) {
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "192.168.*") ||
        host == "localhost"
    ) {
        return "DIRECT";
    }

    return "HTTPS desktop-06vpf7t.tailbc9a40.ts.net:10000; DIRECT";
}
