// Konten mode presentasi: fitur bonus (di luar kontrak) dengan screenshot & kemampuan
window.SLIDES_FEATURES = [
  { key: 'consignment', cat: 'Konsinyasi', title: 'Manajemen Konsinyasi (Titip Jual ke Mitra)',
    shots: ['screens/consignment_request.jpg', 'screens/consignment_report.jpg'],
    caps: [
      'Portal web mitra konsinyasi (/my/consignment): cek stok toko, buat permintaan barang, kirim laporan penjualan, tanpa akses backend',
      'Tiket permintaan stok: hitung stok bebas dari gudang pusat & cabang, pilih gudang pengirim, alur Draft > Submitted > Approved > In Transfer > Done',
      'Mutasi/internal transfer ke lokasi konsinyasi dibuat otomatis',
      'Laporan penjualan konsinyasi: qty dilaporkan mitra, disetujui HQ, lalu otomatis terbit Sales Order, Delivery & Invoice',
      'Audit stok konsinyasi per mitra'
    ],
    usage: '25 request, 12 laporan settlement' },
  { key: 'consignment_inbound', cat: 'Konsinyasi', title: 'Konsinyasi Inbound (Barang Titipan Vendor)',
    shots: ['screens/consignment_inbound.jpg'],
    caps: [
      'Receipt barang titipan vendor (Owner = vendor) tanpa dinilai sebagai persediaan & tanpa hutang',
      'Saat terjual (POS / SO) otomatis jurnal HPP konsinyasi & hutang konsinyasi belum ditagih',
      'Daftar penjualan konsinyasi berstatus To Bill / Billed, buat vendor bill sekali klik per vendor',
      'Laporan stok konsinyasi: diterima, terjual, diretur, on hand dan nilai per vendor & produk'
    ],
    usage: '8 laporan stok konsinyasi' },
  { key: 'approval_procurement', cat: 'Purchase', title: 'Approval Pengadaan dari Toko',
    shots: ['screens/approval_request.jpg'],
    caps: [
      'Toko mengajukan permintaan barang melalui Approvals',
      'Setelah disetujui, admin memilih route & lokasi tujuan: jadi RfQ atau internal transfer',
      'Terhubung dengan Loss Sell Log: barang kosong di kasir langsung jadi permintaan'
    ],
    usage: '470 permintaan, 340 disetujui' },
  { key: 'purchase_group', cat: 'Purchase', title: 'Penggabungan PO Cabang (Purchase Group)',
    shots: ['screens/purchase_group.jpg'],
    caps: [
      'Gabungkan PO beberapa cabang ke 1 Master Purchase Group tanpa mengubah PO asli',
      'Pilih kop surat perusahaan, tanggal surat dan syarat pembelian',
      'Cetak PDF ringkasan total atau breakdown per cabang',
      'Satu surat konsolidasi ke vendor untuk mengejar diskon MOQ'
    ],
    usage: '34 grup PO, 127 kebutuhan cabang' },
  { key: 'bill_check', cat: 'Purchase', title: 'Validasi Vendor Bill vs PO & Monitoring PO',
    shots: ['screens/po_dashboard.jpg'],
    caps: [
      'Kartu monitoring di dashboard Purchase: Waiting to Bill, Bill Mismatch, Bill Belum Cek',
      'Proses verifikasi "Cek Bill" pada PO; cegah bill dari PO yang dibatalkan',
      'Monitoring perubahan harga (naik/turun/sama) dan status penerimaan sejak PO dikonfirmasi',
      'Bonus produk supplier otomatis jadi baris diskon 100% di PO'
    ],
    usage: '551 bill dari PO, 2.678 baris monitoring' },
  { key: 'purchase_return', cat: 'Purchase', title: 'Retur Pembelian ke Vendor per Toko',
    shots: ['screens/purchase_return.jpg'],
    caps: [
      'Retur barang ke supplier memakai operation type keluar (OUT) gudang masing-masing',
      'Bisa merujuk PO asal untuk mengisi vendor & barang otomatis',
      'Diselesaikan dengan credit note (refund bill) atau tukar barang'
    ],
    usage: '61 retur selesai, 5 refund bill' },
  { key: 'distribute', cat: 'Inventory', title: 'Distribusi DC ke Cabang & Mutasi Antar Toko',
    shots: ['screens/branch_mutation.jpg'],
    caps: [
      'Wizard di receipt DC untuk membagi barang ke banyak cabang sekaligus',
      'Internal transfer per cabang dibuat otomatis tanpa input ganda',
      'Permintaan mutasi antar toko dengan cek stok tersedia'
    ],
    usage: '1.791 mutasi, 17 request mutasi' },
  { key: 'opname', cat: 'Inventory', title: 'Stock Opname Batch dengan Verifikasi PIN',
    shots: ['screens/stock_opname.jpg'],
    caps: [
      'Satu batch opname untuk banyak lokasi, lokasi bisa ditambah saat hitung berjalan',
      'Aplikasi Barcode: batch > pilih lokasi > hitung per lokasi',
      'Input qty hitung wajib verifikasi PIN karyawan',
      'Selisih harus disetujui manager sebelum memengaruhi stok'
    ],
    usage: '18 batch, 5.837 baris hitung' },
  { key: 'minmax', cat: 'Inventory', title: 'Saran & Penyesuaian Min/Max Otomatis',
    shots: ['screens/orderpoint.jpg'],
    caps: [
      'Hitung saran Min/Max dari kecepatan jual harian (ADS)',
      'Terintegrasi kelas Pareto (fast/slow/bad moving, barang baru)',
      'Formula buffer standar atau kode Python dinamis',
      'Preview, ubah manual, pilih produk, lalu reordering rule dibuat/diperbarui otomatis'
    ],
    usage: '23.942 reordering rule' },
  { key: 'analytics', cat: 'Inventory', title: 'Stock Aging, BCG Matrix & Pareto ABC',
    shots: ['screens/bcg.jpg', 'screens/pareto.jpg'],
    caps: [
      'Stock aging 4 kelompok umur, filter perusahaan/gudang/kategori, export Excel',
      'Matriks BCG (Stars, Cash Cows, Question Marks, Dogs) per gudang & konsolidasi',
      'Klasifikasi Pareto A/B/C dengan margin %, tampil di produk dan baris PO',
      'Dihitung otomatis terjadwal'
    ],
    usage: 'Seluruh produk aktif' },
  { key: 'cash_control', cat: 'Finance', title: 'Kontrol Kas: Traceability & Auto-Reconcile',
    shots: [],
    caps: [
      'Pilih bank/jurnal tujuan langsung di layar bank matching rekening koran',
      'Lacak transfer masuk yang menggantung di jurnal tujuan secara real-time',
      'Rekening koran & rekonsiliasi kas dibuat otomatis',
      'Batas saldo minimum per jurnal kas/bank (blokir atau peringatan)'
    ],
    usage: '6.582 rekonsiliasi parsial' },
  { key: 'otp', cat: 'POS', title: 'OTP Akses Supervisor di Kasir',
    shots: ['screens/pos_access_request.jpg'],
    caps: [
      'Ubah qty, diskon, harga, cashback dan fee tukang butuh OTP supervisor',
      'Harga di bawah harga minimum pricelist harus disetujui',
      'Batal order, refund, cetak ulang, cash in/out terkontrol',
      'Semua permintaan tercatat untuk audit'
    ],
    usage: '4.076 permintaan akses' },
  { key: 'loss_sell', cat: 'POS', title: 'Loss Sell Log (Barang Kosong / Tidak Jadi Beli)',
    shots: ['screens/loss_sell.jpg'],
    caps: [
      'Tombol Loss Sell di layar kasir dengan alasan dinamis (barang kosong, gagal harga, dll)',
      'Mencatat produk, qty, harga, pelanggan, kasir, sesi',
      'Tindak lanjut langsung dari daftar: Bikin RFQ, Minta Mutasi, atau Abaikan',
      'Laporan dengan filter & pengelompokan'
    ],
    usage: '1.990 log' },
  { key: 'cash_correction', cat: 'POS', title: 'Koreksi Closing Kas & Ganti Metode Bayar',
    shots: ['screens/cash_correction.jpg'],
    caps: [
      'Backoffice mengoreksi saldo closing kas sesi yang sudah ditutup, jurnal diperbarui otomatis',
      'Perbandingan expected vs actual per metode bayar',
      'Ganti metode bayar order yang sudah dibayar selama sesi masih aktif (layar POS & backend)',
      'Riwayat lengkap: siapa, kapan, dari berapa ke berapa, alasan'
    ],
    usage: '116 koreksi kas, 45 perubahan metode bayar' },
  { key: 'ship_later', cat: 'POS', title: 'Ship Later dengan Jadwal Kirim & AI Upsell',
    shots: [],
    caps: [
      'Ship Later dengan jam kirim, tercetak di struk dan jadwal delivery',
      'AI Upsell di kasir: target nilai keranjang, rekomendasi produk pelengkap, kebiasaan pelanggan',
      'Rekomendasi hanya untuk barang yang tersedia di cabang, tambah ke keranjang 1 klik'
    ],
    usage: 'Aktif di 11 POS' },
  { key: 'referral', cat: 'CRM & Loyalty', title: 'Program Referral Mitra & Tabungan Tukang',
    shots: ['screens/loyalty_card.jpg'],
    caps: [
      'Tandai partner sebagai tukang/mitra dan lacak total tabungan komisinya',
      'Komisi per produk (nominal atau persen) tanpa mengubah harga jual',
      'Tercatat dari Sales Order maupun POS',
      'Pencairan tabungan otomatis terhubung ke Expense'
    ],
    usage: '581 kartu referral/member' },
  { key: 'loyalty', cat: 'CRM & Loyalty', title: 'Loyalty Bertingkat & Kupon Undian',
    shots: ['screens/lottery.jpg'],
    caps: [
      'Poin loyalitas per kelipatan belanja (mis. tiap Rp50.000 = 1 poin)',
      'Kupon undian otomatis dari POS & invoice lunas, tercetak di struk',
      'Undian gabungan semua toko, satu pemenang per pelanggan, lacak pengambilan hadiah'
    ],
    usage: '1.027 histori loyalty, 105 kupon' },
  { key: 'crm', cat: 'CRM & Loyalty', title: 'CRM Field Sales / Canvassing',
    shots: [],
    caps: [
      'Portal canvassing (/canvas) dengan login PIN & GPS',
      'Prospek proyek & riwayat kunjungan dengan foto',
      'Segmentasi RFM dan tipe pelanggan bertingkat',
      'Target sales bulanan vs realisasi dari POS & quotation'
    ],
    usage: '608 prospek, 118 jadwal canvassing' },
  { key: 'price', cat: 'Harga', title: 'Approval Harga & Monitoring Margin',
    shots: ['screens/price_monitor.jpg'],
    caps: [
      'Harga minimum per aturan pricelist; di bawahnya butuh Price Manager',
      'Popup peringatan di POS dan blokir di Sales',
      'Kenaikan harga beli di PO memicu antrean penyesuaian harga jual agar margin terjaga'
    ],
    usage: '3.978 log margin harga' },
  { key: 'payroll', cat: 'HR', title: 'Payroll Kustom & Pinjaman Karyawan',
    shots: [],
    caps: [
      'Upah bulanan bertingkat atau harian berdasarkan kehadiran',
      'Tunjangan makan & transport dari absensi, bonus KPI dan bonus kehadiran',
      'Potongan keterlambatan otomatis, tunjangan canvassing',
      'Kasbon/pinjaman dengan cicilan terpotong otomatis di payroll',
      'Slip gaji format Inti Warna, bisa dilihat di portal'
    ],
    usage: '10 evaluasi KPI' },
  { key: 'hr_portal', cat: 'HR', title: 'Portal Karyawan (/hr)',
    shots: [],
    caps: [
      'Login PIN dengan penguncian setelah 5x salah',
      'Absensi GPS dengan radius cabang dan cek wajah selfie',
      'Pengajuan cuti dengan dokumen pendukung, lihat & unduh slip gaji',
      'SOP & training per jabatan dengan kuis',
      'Menu MPR, observasi & probation untuk atasan'
    ],
    usage: '1.264 data absensi' },
  { key: 'planning', cat: 'HR', title: 'Planning Jadwal Kerja Terintegrasi',
    shots: [],
    caps: [
      'Shift di Planning otomatis membuat libur mingguan (time off)',
      'Shift canvassing membuat jadwal canvassing CRM sesuai area',
      'Shift stock opname konsinyasi membuat tugas audit (tampil di portal karyawan)',
      'Pindah/hapus shift memperbarui dokumen; realisasi masuk work entry payroll'
    ],
    usage: 'Dirilis ke produksi Oktober 2026' },
  { key: 'mpr', cat: 'HR', title: 'Alur Rekrutmen & Permintaan Tenaga Kerja (MPR)',
    shots: [],
    caps: [
      'Pengajuan MPR (penambahan / penggantian) oleh kepala cabang via portal',
      'Persetujuan berjenjang: HR, Finance, Direktur',
      'Setelah disetujui, kuota lowongan otomatis terbuka',
      'Observasi & evaluasi masa percobaan'
    ],
    usage: '79 kriteria observasi' },
  { key: 'fleet', cat: 'Logistik', title: 'Fleet Delivery & Antrian Pengiriman',
    shots: [],
    caps: [
      'Antrean muatan per kendaraan dari DO & internal transfer',
      'Akun driver dengan tampilan mobile, inspeksi kendaraan berangkat/kembali',
      'Serah terima kas COD dari driver ke toko',
      'Dashboard armada dengan peta; tombol "Antrean Mobil" di POS'
    ],
    usage: 'Aktif' },
  { key: 'messaging', cat: 'Komunikasi', title: 'Integrasi WhatsApp & Telegram',
    shots: [],
    caps: [
      'Nomor WhatsApp berbeda per cabang / perusahaan',
      'Template pesan seperti template email, kirim PDF quotation, PO, struk',
      'Bot Telegram untuk notifikasi & alert manajemen'
    ],
    usage: '9 konfigurasi WhatsApp' },
  { key: 'ai', cat: 'AI', title: 'AI Assistant & Laporan Bisnis Harian',
    shots: [],
    caps: [
      'Knowledge base per departemen dan asisten AI berbasis data Odoo',
      'Tanya stok, omzet POS, hutang/piutang, reorder point, draft PO',
      'Laporan bisnis harian otomatis (PDF) dikirim via WhatsApp & Telegram'
    ],
    usage: 'Aktif' }
];
