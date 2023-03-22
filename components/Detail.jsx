const Detail = () => {
    return (
<div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 text-black">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Headline Berita</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-500">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
					<p className="text-sm">jurnalis</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">• tgl rilis berita</p>
			</div>
		</div>
		<div className="text-black">
			<p>PentingBerita.com - Indonesia Mencari Bakat (IMB) jadi salah satu ajang bergengsi di Indonesia. KLovers masih ingat nggak dengan Amelia Limarwati yang berhasil menempati urutan lima besar di Indonesia Mencari Bakat 2021? Wanita yang berasal dari Sidoarjo ini akrab disapa Amel, ia sukses memukau juri seperti Titi DJ hingga Deddy Corbuzier.

Dua tahun berlalu, Amel mengaku belum bisa 'move on' dari panggung Indonesia Mencari Bakat (IMB) tersebut. Peraih medali perak di International Mandarin Singing Competition Watercube Cup 2012 di Beijing ini mengaku banyak ilmu yang didapat dari IMB itu.

"Kabar aku baik, sehat, dan puji Tuhan sibuk," ujar Amel saat berbincang.</p>
		</div>
	</article>
	<div>
		<div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:text-gray-900">Category</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Headline Berita Lain</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Headline Berita Lain</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Headline Berita Lain</a>
				</li>
			</ul>
		</div>
	</div>
</div>
        );
    };
    
    export default Detail;