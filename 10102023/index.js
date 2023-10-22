try {
    const site_id = 'ygwc0Kea';
    const v2_api_secret = 'a2tpCretsDyzv6Lnp9UQBWInTTJaUlQxa3hjREZNU2tsSWFHNXhVVGgwZVU1eVlVMVIn';
    const apiUrl = `https://api.jwplayer.com/v2/sites/${site_id}/media`;
    const fileInput = this.$refs.video;
    if (!fileInput || !fileInput.getFile(0)) {
        throw new Error('No file selected.');
    }
    const file = fileInput.getFile(0);
    const fileBlob = new Blob([file], { type: 'video/mp4' });
    const fileData = await(async () => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (event) => reject(event.target.error);
            reader.readAsArrayBuffer(fileBlob);  // Pass fileBlob here
        });
    })();
    const request_data = {
        upload: { mime_type: 'video/mp4', method: 'direct' },
        metadata: { title: file.filename },
    };
    const response = await fetch(apiUrl, { method: 'POST', body: JSON.stringify(request_data), headers: { 'Authorization': `Bearer ${v2_api_secret}`, 'Content-Type': 'application/json', }, });
    const responseData = await response.json(); const upload_link = responseData.upload_link;
    //console.log(fileBlob);    
    // return false; 
    const responseTwo = await fetch(upload_link, { method: 'PUT', body: fileBlob, headers: { 'Content-Type': 'video/mp4' }, });
    console.log(responseTwo);
} catch (error) {
    console.error(error);
}