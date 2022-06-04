<script type="ts">
    export let url: string;
    export let dataUrl: string;
    export let title: string;
    
    function downloadQrCode() {
        if (!dataUrl) {
            return;
        }

        chrome.downloads?.download({
            url: dataUrl,
            filename: getFileName(url)
        });
    }


    function getFileName(url: string): string {
        const replacedTitle = title.replaceAll(/[\/\\\?\|\"\'\:\*\\]/g, '');
        return `${replacedTitle}_qrcode.png`;
    }
</script>

<button class="qrcode-download" on:click={downloadQrCode}>下载</button>

<style>
    button {
        height: 24px;
        border-radius: 5px;
        border: 1px solid #e8eaed;
        background: #ffffff;
        font-size: 12px;
        width: 40px;
        cursor: pointer;
    }

    button:hover {
        text-decoration: underline;
        color: #09aaff;
    }
</style>
