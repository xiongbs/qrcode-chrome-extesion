<script type="ts">
	import { createEventDispatcher } from 'svelte';
    import {toDataURL, type QRCodeToDataURLOptions} from 'qrcode';
	import { writable } from 'svelte/store';

    export let text: string;
    export let options: QRCodeToDataURLOptions = {
		type: 'image/png',
		margin: 2,
		width: 240
	}

	const dataUrl = writable('');
    const dispatch = createEventDispatcher();

    // 响应式属性
    $: {
		console.log(text);
		if (text) {
			toDataURL(text, options).then( url => {
				dataUrl.set(url);
				dispatch('ready', url);
			})
		} else {
			dataUrl.set('');
		}
    }
</script>

<div class="qrcode">
	{#if $dataUrl}
		<img src={$dataUrl} alt="qrcode" />
	{/if}
</div>

<style>
	.qrcode {
		width: 240px;
		height: 240px;
		border: 2px solid #e8eaed;
		border-radius: 10px;
		background: #f1f3f4;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 10px;
	}
</style>
