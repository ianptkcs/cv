function gerarPdf() {
	var element = document.querySelector('.cv');
	var opt = {
		filename: 'myfile.pdf',
		pagebreak: { mode: ['css', 'legacy', 'avoid-all'] },
		jsPDF: {
			unit: 'mm',
			format: 'a4',
			orientation: 'portrait',
		},
	};

	html2pdf().set(opt).from(element).save();
}
