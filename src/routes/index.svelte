<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
	import Qrcode from '../lib/Qrcode.svelte';
	import Download from "../lib/download.svelte";
	import {onMount} from 'svelte';

	async function getCurrentTab(): Promise<chrome.tabs.Tab | {url?: '', title?: ''}> {
		if (typeof chrome === 'undefined' || typeof chrome.tabs === 'undefined') {
			return Promise.resolve({url: ''});
		}

		const questions = {active: true, currentWindow: true};
		const [tab] = await chrome.tabs.query(questions);
		return tab;
	}


	let url  = '';
	let dataUrl = '';
	let title = '';

	onMount(() => {
		(async () => {
			const tab = await getCurrentTab();
			url = tab.url || 'no url';
			title = tab.title || '';
		})()
	});

	function dataUrlReadyFunc(event: CustomEvent) {
		dataUrl = event.detail;
	}

</script>

<svelte:head>
	<title>QR code</title>
	<meta name="description" content="url QR code" />
</svelte:head>

<section>
	<Qrcode bind:text={url} on:ready={dataUrlReadyFunc} />
	<div class="flex">
		<input type="text" bind:value={url}>
		<Download bind:dataUrl={dataUrl} bind:url={url} bind:title={title} />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.flex {
	
		width: 240px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	input[type="text"] {
		height: 24px;
		padding: 0 5px;
		border-radius: 5px;
		border: 1px solid #e8eaed;
	}

	input:hover {
		border-color: dodgerblue;
	}
</style>
