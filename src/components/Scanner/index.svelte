<script lang="ts">
	import { t } from '$lib/i18n/';
    import { Button } from "$lib/components/ui/button/index";
    import {
        Html5QrcodeScanner,
        type Html5QrcodeResult,
        Html5QrcodeScanType,
        Html5QrcodeSupportedFormats,
        Html5QrcodeScannerState,
    } from 'html5-qrcode';

    export let onDetected: (decodedText: string) => void;
 
    function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult): void {
        console.log("decodedText: ", decodedText)
        stopScan()
        onDetected(decodedText)
    }

    // usually better to ignore and keep scanning
    function onScanFailure(message: string) {
        console.log("decodedError: ", message)
    }

    let scanner: Html5QrcodeScanner;
    let isScanning = false

    let width = 250
    let height = 250

    async function startScan() {
        if (scanner?.getState() === Html5QrcodeScannerState.PAUSED) {
            scanner?.resume()
            return
        }
        if (isScanning) {
            return
        }
        isScanning = true 
        scanner = new Html5QrcodeScanner(
            "qr-scanner",
            {
                fps: 10,
                qrbox: { width, height },
                aspectRatio: 1,
                supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
                formatsToSupport: [
                    Html5QrcodeSupportedFormats.QR_CODE, 
                    Html5QrcodeSupportedFormats.CODABAR, 
                    Html5QrcodeSupportedFormats.EAN_13,
                    Html5QrcodeSupportedFormats.EAN_8,
                    Html5QrcodeSupportedFormats.AZTEC,
                    Html5QrcodeSupportedFormats.CODE_128,
                    Html5QrcodeSupportedFormats.CODE_39,
                    Html5QrcodeSupportedFormats.CODE_93
                ],
            },
            false // non-verbose
        );
        scanner.render(onScanSuccess, onScanFailure);
    }

    function stopScan() {
        isScanning = false;
        if (scanner?.getState() === Html5QrcodeScannerState.SCANNING) {
            scanner?.pause();
        }
    }
</script>

<div>
    <div id="qr-scanner"></div>
    <button on:click={startScan}>
        <Button disabled={isScanning}>
            {$t("common.scanner.start")}
        </Button>
    </button>
    <button on:click={stopScan}>
        <Button disabled={!isScanning}>
            {$t("common.scanner.stop")}
        </Button>
    </button>
</div>