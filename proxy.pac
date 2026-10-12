function FindProxyForURL(url, host) {
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "192.168.*") ||
        host == "localhost"
    ) {
        return "DIRECT";
    }

    return "PROXY 192.168.1.72:8080; DIRECT";
}
