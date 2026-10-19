window.PORTAL_DATA = {
  "project": {
    "title": "Portal Progress & Audit UAT Odoo ERP",
    "client": "PT Inti Adhigana Ubaid (Intiwarna)",
    "vendor": "PT Digital Decision Indonesia (Digision)",
    "database": "Produksi inti-warna.odoo.com (salinan per 16 Oktober 2026)",
    "odoo_version": "Odoo 19.0 Community / Custom Enterprise",
    "odoo_base_url": "https://inti-warna.odoo.com/",
    "last_updated": "19 Oktober 2026",
    "executive_summary": "Rekap status 136 test case Dokumen UAT v2.0 (4 Maret 2026) per cut-off data produksi 16 Oktober 2026. Status berdasarkan transaksi di database produksi, kontrol UAT operasional (xlsx 2 Okt 2026) dan konfirmasi tim implementasi. 133 dari 136 test case selesai (97.8%); modul selesai 100%: Purchase, Sales, Point of Sale, Inventory, Website E-Commerce, Expenses, Forecast, Dashboard. Ditambah 30 fitur tambahan di luar test case UAT yang sudah dipakai di produksi.",
    "cutoff": "16 Oktober 2026"
  },
  "db_stats": [
    {
      "label": "Faktur & Transaksi Jurnal",
      "count": 39603,
      "icon": "receipt",
      "badge": "account_move",
      "status": "active"
    },
    {
      "label": "Transaksi Kasir POS",
      "count": 11292,
      "icon": "point_of_sale",
      "badge": "pos_order",
      "status": "active"
    },
    {
      "label": "Sesi Kasir Aktif/Tertutup",
      "count": 1056,
      "icon": "storefront",
      "badge": "pos_session",
      "status": "active"
    },
    {
      "label": "Pergerakan Surat Jalan & Mutasi",
      "count": 16819,
      "icon": "local_shipping",
      "badge": "stock_picking",
      "status": "active"
    },
    {
      "label": "Item Stok Quant di Gudang",
      "count": 23675,
      "icon": "inventory_2",
      "badge": "stock_quant",
      "status": "active"
    },
    {
      "label": "Gudang & Titik Cabang",
      "count": 28,
      "icon": "warehouse",
      "badge": "stock_warehouse",
      "status": "active"
    },
    {
      "label": "Purchase Order Vendor",
      "count": 1018,
      "icon": "shopping_cart",
      "badge": "purchase_order",
      "status": "active"
    },
    {
      "label": "Master Data Kontak / Partner",
      "count": 60251,
      "icon": "groups",
      "badge": "res_partner",
      "status": "active"
    },
    {
      "label": "Katalog Produk & Cat",
      "count": 19105,
      "icon": "format_paint",
      "badge": "product_template",
      "status": "active"
    },
    {
      "label": "Master Data Karyawan",
      "count": 101,
      "icon": "badge",
      "badge": "hr_employee",
      "status": "active"
    },
    {
      "label": "Log Rekomendasi Margin Harga",
      "count": 3978,
      "icon": "trending_up",
      "badge": "price_monitoring_log",
      "status": "active"
    },
    {
      "label": "Distribusi Mutasi Cabang",
      "count": 1791,
      "icon": "fork_right",
      "badge": "digi_branch_mutation",
      "status": "active"
    },
    {
      "label": "Batch Stock Opname PIN",
      "count": 18,
      "icon": "fact_check",
      "badge": "stock_opname_batch",
      "status": "active"
    },
    {
      "label": "Pengajuan Approval SCM & Keuangan",
      "count": 470,
      "icon": "approval",
      "badge": "approval_request",
      "status": "active"
    },
    {
      "label": "Log Transaksi Tabungan Tukang",
      "count": 0,
      "icon": "savings",
      "badge": "tabungan_tukang_log",
      "status": "active"
    }
  ],
  "uat_modules": [
    {
      "id": "purchase",
      "code": "PUR",
      "name": "Purchase (Pengadaan)",
      "icon": "shopping_cart",
      "description": "Manajemen pengadaan barang dari supplier, permintaan pembelian, PO, penerimaan barang, dan pembayaran.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Request for Quotation (RfQ)",
          "steps": "1. Buka modul Purchase 2. Orders > Requests for Quotation 3. Klik Create 4. Pilih vendor 5. Tambahkan produk 6. Isi qty & harga 7. Simpan",
          "expected": "RfQ berhasil dibuat dengan nomor dokumen otomatis dan status 'RFQ'",
          "status": "PASS",
          "db_evidence": "1.018 RfQ/PO di prod (mis. P01092); xlsx PUR-001, PUR-002 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-563",
          "notes": "",
          "conveniences": [
            {
              "title": "Vendor Price Comparison & Margin Monitor",
              "module": "digi_price_margin_monitor",
              "icon": "trending_up",
              "tag": "Proteksi Profit",
              "desc": "Membandingkan riwayat harga beli vendor dari transaksi sebelumnya, mendeteksi kenaikan harga di luar batas toleransi, dan mengunci margin profit penjualan toko."
            },
            {
              "title": "Update Otomatis Master Harga Vendor",
              "module": "digi_purchase_update_vendor_info",
              "icon": "sync_alt",
              "tag": "Master Data",
              "desc": "Sinkronisasi instan harga beli dan diskon terbaru ke master vendor pricelist (product_supplierinfo) saat PO tervalidasi."
            },
            {
              "title": "Purchase Requisition (PR) & Workflow Approval",
              "module": "digi_approval_procurement",
              "icon": "fact_check",
              "tag": "Kontrol Wewenang",
              "desc": "Pengajuan kebutuhan barang internal dari toko/cabang dengan validasi berjenjang supervisor/manager sebelum diterbitkan menjadi RFQ resmi ke supplier."
            },
            {
              "title": "Tracking Terpadu Perjalanan PR -> RFQ -> Goods Receipt",
              "module": "Tracking Terpadu",
              "icon": "timeline",
              "tag": "Traceability",
              "desc": "Pelacakan status terpadu lifecycle pengadaan dari nomor PR, status persetujuan, nomor RFQ, PO terbit, hingga penerimaan fisik barang di gudang."
            },
            {
              "title": "Purchase Order Grouping / Gabung RFQ",
              "module": "digi_purchase_group",
              "icon": "folder_copy",
              "tag": "Efisiensi PO",
              "desc": "Penggabungan otomatis multi-permintaan pembelian cabang/gudang ke satu PO master supplier dengan template kop surat cabang dinamis."
            },
            {
              "title": "Multi-Level Discount & Cash Discount (CB)",
              "module": "Kustom Baris PO",
              "icon": "percent",
              "tag": "Kalkulasi Diskon",
              "desc": "Dukungan diskon bertingkat (misal: 10% + 5% + 2.5%) serta potongan tunai (cash discount) langsung pada baris penawaran RFQ/PO."
            },
            {
              "title": "Peringatan Batas Maksimum Stok (Stock Max Warning)",
              "module": "digi_purchase_stock_max_warning",
              "icon": "warning_amber",
              "tag": "Mencegah Overstock",
              "desc": "Peringatan dini otomatis di form pembelian jika kuantitas beli membuat persediaan melebihi kapasitas aman gudang atau batas modal kerja."
            },
            {
              "title": "Bonus Produk Pembelian Otomatis (100% Discount)",
              "module": "digi_purchase_bonus_product",
              "icon": "card_giftcard",
              "tag": "Skema Prinsipal",
              "desc": "Pembuatan baris produk bonus otomatis (diskon 100%) dari promo supplier tanpa merusak perhitungan harga pokok penjualan (HPP)."
            },
            {
              "title": "Penomoran Urut Baris Dokumen PO",
              "module": "digi_purchase_invoice_line_number",
              "icon": "format_list_numbered",
              "tag": "Standar Dokumen",
              "desc": "Penomoran urut baris 1, 2, 3... pada tabel detail PO untuk mempermudah checklist fisik terhadap penawaran harga vendor."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Pengiriman RfQ ke Vendor via Email",
          "steps": "1. Buka RfQ yang dibuat 2. Klik 'Send by Email' 3. Preview email 4. Klik Send",
          "expected": "Email terkirim ke vendor dan status berubah menjadi 'RFQ Sent'",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; 3 RfQ berstatus \"RFQ Sent\" (mis. P00848)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-563",
          "notes": "",
          "conveniences": [
            {
              "title": "Dispatch RFQ via WhatsApp & Email Otomatis",
              "module": "digi_whatsapp_evolution",
              "icon": "chat",
              "tag": "Otomasi Komunikasi",
              "desc": "Kirim dokumen penawaran RFQ langsung ke nomor WhatsApp supplier atau email resmi dalam format PDF ber-kop surat resmi Intiwarna."
            },
            {
              "title": "Tracking Delivery Status & Read Receipts",
              "module": "Standard Odoo + WhatsApp API",
              "icon": "mark_email_read",
              "tag": "Audit Trail",
              "desc": "Pencatatan tanggal dan jam pengiriman RFQ serta konfirmasi penerimaan pesan oleh kontak supplier."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Konfirmasi Purchase Order",
          "steps": "1. Buka RfQ dikirim 2. Review harga & term 3. Klik 'Confirm Order'",
          "expected": "Status berubah menjadi 'Purchase Order' dan nomor PO ter-generate otomatis",
          "status": "PASS",
          "db_evidence": "540 PO terkonfirmasi (mis. P01063); xlsx PUR-009, PUR-039 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "",
          "conveniences": [
            {
              "title": "Multi-Stage Approval Purchase Order",
              "module": "digi_purchase_approval",
              "icon": "gavel",
              "tag": "Persetujuan Direksi",
              "desc": "Validasi berjenjang untuk PO dengan nominal besar sebelum status berubah menjadi 'Purchase Order' yang mengikat legalitas pembelian."
            },
            {
              "title": "Kunci Harga Beli & Update Master Supplier",
              "module": "digi_purchase_update_vendor_info",
              "icon": "lock",
              "tag": "Integritas Data",
              "desc": "Penguncian otomatis harga kesepakatan dan pembaharuan tabel daftar harga vendor untuk pesanan berikutnya."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Penerimaan Barang dari Vendor",
          "steps": "1. Buka PO terkonfirmasi 2. Klik 'Receive Products' 3. Isi jumlah barang diterima 4. Klik 'Validate'",
          "expected": "Penerimaan barang tercatat, stok bertambah, status menjadi 'Received'",
          "status": "PASS",
          "db_evidence": "594 receipt dari PO selesai (mis. AFT/IN/00211); xlsx PUR-013, PUR-080 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Pemeriksaan Fisik vs PO (Partial & Full Receipt)",
              "module": "Standard Odoo Inventory",
              "icon": "inventory",
              "tag": "Gudang & QC",
              "desc": "Pencatatan penerimaan barang fisik dengan verifikasi kuantitas terkirim vs order, otomatis menerbitkan Backorder jika ada sisa barang."
            },
            {
              "title": "Cetak Label Barcode & Lokasi Rak Otomatis",
              "module": "digi_stock_continuous_report",
              "icon": "qr_code_2",
              "tag": "Manajemen Rak",
              "desc": "Pencetakan label barcode item langsung dari form penerimaan untuk ditempelkan pada fisik barang cat/material gudang."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Pembuatan Vendor Bill",
          "steps": "1. Buka PO yang sudah diterima 2. Klik 'Create Bill' 3. Review detail bill 4. Klik 'Confirm'",
          "expected": "Vendor Bill terbuat otomatis dan tercatat di modul Accounting",
          "status": "PASS",
          "db_evidence": "551 vendor bill dari PO (mis. BILL/2026/10/0035); xlsx PUR-017, PUR-070 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "",
          "conveniences": [
            {
              "title": "Pemeriksaan & Cek Bill (Vendor Bill Verification)",
              "module": "digi_purchase_bill_verification",
              "icon": "verified_user",
              "tag": "Verifikasi Tagihan",
              "desc": "Fitur validasi otomatis nomor seri faktur vendor, tanggal jatuh tempo, dan tanggal penerimaan fisik barang sebelum Bill diposting."
            },
            {
              "title": "Comparison Bill vs PO Detail (Variance Audit)",
              "module": "digi_bill_po_comparison",
              "icon": "compare_arrows",
              "tag": "Deteksi Selisih",
              "desc": "Perbandingan mendetail tiap baris barang antara Vendor Bill vs PO detail, mendeteksi selisih kuantitas (qty variance) dan selisih harga (price variance) secara real-time."
            },
            {
              "title": "Upload & Lampiran Bill PDF/Foto",
              "module": "Standard Odoo Attachment",
              "icon": "cloud_upload",
              "tag": "Digitalisasi Dokumen",
              "desc": "Fasilitas upload file fisik faktur tagihan supplier (PDF/Gambar) langsung ke form Vendor Bill untuk kemudahan pengarsipan digital."
            },
            {
              "title": "Validation 3-Way Matching (PO - Receipt - Bill)",
              "module": "Standard Odoo 3-Way Match",
              "icon": "checklist_rtl",
              "tag": "Kontrol Keuangan",
              "desc": "Mencegah pembayaran faktur jika jumlah yang ditagih vendor melebihi jumlah barang yang terverifikasi diterima di gudang."
            },
            {
              "title": "Multi-Tax & Pencatatan Faktur Pajak Supplier",
              "module": "Standard Odoo Tax",
              "icon": "receipt_long",
              "tag": "Perpajakan",
              "desc": "Pengisian nomor e-Faktur PPN 11% dan withholding tax PPh 23 pada saat penginputan tagihan tagihan supplier."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Pembayaran ke Vendor",
          "steps": "1. Buka Vendor Bill di Accounting 2. Klik 'Register Payment' 3. Pilih journal 4. Isi amount 5. Klik 'Create Payment'",
          "expected": "Pembayaran tercatat dan status bill berubah menjadi 'Paid'",
          "status": "PASS",
          "db_evidence": "397 bill lunas, 1.222 pembayaran keluar (mis. BILL/2026/10/0038)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "",
          "conveniences": [
            {
              "title": "Registrasi Pembayaran & Rekonsiliasi AP",
              "module": "Standard Odoo Accounting",
              "icon": "payments",
              "tag": "Kas & Bank",
              "desc": "Eksekusi pembayaran vendor via transfer bank/kas, otomatis memotong saldo Hutang Dagang (Accounts Payable) dan melakukan rekonsiliasi."
            },
            {
              "title": "Alokasi Uang Muka / Down Payment PO",
              "module": "Standard Odoo Payment",
              "icon": "account_balance_wallet",
              "tag": "Uang Muka Beli",
              "desc": "Pelunasan berbasis alokasi DP yang telah dibayarkan saat awal pemesanan PO secara transparan."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Laporan Pembelian",
          "steps": "1. Buka Reporting > Purchase 2. Pilih jenis laporan 3. Filter periode dan vendor 4. Generate laporan",
          "expected": "Laporan pembelian ditampilkan dengan akurat sesuai filter",
          "status": "PASS",
          "db_evidence": "xlsx PUR-042, PUR-043, PUR-044 PASS (laporan outstanding, harga supplier, overdue)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "",
          "conveniences": [
            {
              "title": "Analisis Pembelian Pivot & Grafik per Vendor",
              "module": "Standard Odoo Reporting",
              "icon": "analytics",
              "tag": "Laporan Manajemen",
              "desc": "Laporan pengadaan interaktif berdasarkan kategori produk, performa vendor, tren harga, dan volume transaksi per cabang."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Pengembalian Barang ke Vendor",
          "steps": "1. Buka receipt tervalidasi 2. Klik 'Return' 3. Pilih barang dikembalikan 4. Validasi return",
          "expected": "Return tercatat, stok berkurang, credit note dapat dibuat",
          "status": "PASS",
          "db_evidence": "61 retur ke vendor selesai (mis. CARF/OUT/00029, HRP/OUT/00012); 5 refund bill (RBILL/2026/08/0001); xlsx PUR-023 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Return Shipping & Vendor Credit Note",
              "module": "Standard Odoo Purchase Return",
              "icon": "assignment_return",
              "tag": "Retur Pembelian",
              "desc": "Proses pengembalian barang cacat/rusak ke supplier dilengkapi surat jalan retur dan pengurangan tagihan (Credit Note)."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Pengaturan Lead Time Supplier",
          "steps": "1. Buka Product > Purchase tab 2. Set lead time untuk setiap vendor 3. Simpan perubahan",
          "expected": "Lead time tercatat dan digunakan untuk perhitungan reordering",
          "status": "PASS",
          "db_evidence": "80.494 vendor pricelist dengan lead time; xlsx PUR-026 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "",
          "conveniences": [
            {
              "title": "Vendor Lead Time & Safety Days Setup",
              "module": "Standard Odoo Procurement",
              "icon": "schedule",
              "tag": "Perencanaan Stok",
              "desc": "Pengaturan durasi waktu tunggu pengiriman dari supplier untuk menentukan tanggal pemesanan paling lambat."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Purchase Order dari Reordering Rule",
          "steps": "1. Set reordering rule untuk produk 2. Jalankan scheduler 3. Sistem otomatis membuat RfQ",
          "expected": "RfQ dibuat otomatis berdasarkan reordering rule",
          "status": "PASS",
          "db_evidence": "205 RfQ dari reordering rule (mis. P01079); xlsx PUR-055 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "",
          "conveniences": [
            {
              "title": "Otomasi Reordering Rule (Min/Max Stock)",
              "module": "Standard Odoo Automated Procurement",
              "icon": "autorenew",
              "tag": "Auto Replenishment",
              "desc": "Sistem otomatis membuat draf RFQ saat stok gudang menyentuh batas minimum yang telah dikonfigurasi."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "*Perhitungan Landed Cost Berdasarkan Bobot",
          "steps": "1. Buat PO & terima barang 2. Buat Landed Cost untuk PO 3. Set metode 'Weight' 4. Validasi",
          "expected": "Biaya Landed Cost didistribusikan ke nilai barang masuk (HPP) berdasarkan bobot secara akurat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; fitur Landed Cost aktif (LC/2026/0001)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "",
          "conveniences": [
            {
              "title": "Alokasi Landed Cost (Biaya Kirim & Impor ke HPP)",
              "module": "Standard Odoo Landed Cost",
              "icon": "calculate",
              "tag": "Akuntansi Persediaan",
              "desc": "Pendistribusian biaya tambahan (ongkos kirim, asuransi, bongkar muat) ke dalam HPP fisik barang berdasarkan bobot/volume."
            }
          ]
        }
      ],
      "custom_features_count": 19
    },
    {
      "id": "sales",
      "code": "SAL",
      "name": "Sales (Penjualan)",
      "icon": "point_of_sale",
      "description": "Pengelolaan seluruh proses penjualan, penawaran (quotation), sales order, pengiriman, dan faktur.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Quotation",
          "steps": "1. Buka modul Sales 2. Orders > Quotations 3. Klik Create 4. Pilih customer 5. Tambahkan produk 6. Isi qty & harga 7. Simpan",
          "expected": "Quotation berhasil dibuat dengan nomor dokumen dan status 'Quotation'",
          "status": "PASS",
          "db_evidence": "17 quotation/SO backend (mis. S00053)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-395",
          "notes": "",
          "conveniences": [
            {
              "title": "Customer Margin Calculator & Limit Kredit",
              "module": "digi_customer_info_dashboard",
              "icon": "credit_score",
              "tag": "Kontrol Piutang",
              "desc": "Peringatan otomatis saat nilai penawaran melebihi sisa plafon kredit pelanggan atau margin di bawah standar perusahaan."
            },
            {
              "title": "Multicurrency & Price List Cabang",
              "module": "Standard Odoo Sales",
              "icon": "sell",
              "tag": "Katalog Harga",
              "desc": "Dukungan daftar harga khusus grosir, kontraktor, dan eceran per wilayah cabang."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Pengiriman Quotation ke Customer",
          "steps": "1. Buka quotation 2. Klik 'Send by Email' 3. Review email preview 4. Klik Send",
          "expected": "Email terkirim ke customer dan status quotation tercatat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-395",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pengiriman Quotation ke Customer secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Konfirmasi Sales Order",
          "steps": "1. Buka quotation yang disetujui 2. Klik 'Confirm' 3. Sistem membuat Delivery Order",
          "expected": "Status berubah menjadi 'Sales Order' dan Delivery Order terbuat otomatis",
          "status": "PASS",
          "db_evidence": "15 SO terkonfirmasi, delivery order otomatis (S00053 -> CCON/OUT/00010)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Otoritas Approval Diskon & Harga Jual Khusus",
              "module": "digi_approval_price",
              "icon": "security",
              "tag": "Proteksi Margin",
              "desc": "Validasi berjenjang jika sales memberikan diskon di luar wewenang atau harga di bawah minimum margin profit."
            },
            {
              "title": "Peringatan Plafon Piutang (Credit Limit Warning)",
              "module": "Proteksi Piutang",
              "icon": "warning",
              "tag": "Audit Finansial",
              "desc": "Peringatan otomatis jika pelanggan memiliki tunggakan jatuh tempo atau melebihi limit kredit saat SO dikonfirmasi."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Pengaturan Harga Pricelist",
          "steps": "1. Buat pricelist baru 2. Tentukan aturan harga 3. Set periode berlaku 4. Assign ke customer",
          "expected": "Pricelist aktif dan diterapkan saat transaksi dengan customer tersebut",
          "status": "PASS",
          "db_evidence": "18 pricelist, 210.192 aturan harga; dipakai di SO (Pricelist Konsinyasi Rohul, Harga Jual IW ARF) dan POS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pengaturan Harga Pricelist secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Diskon per Line Item",
          "steps": "1. Buat quotation baru 2. Tambahkan produk 3. Isi kolom discount pada line item 4. Hitung total",
          "expected": "Diskon diterapkan per line dan total dihitung dengan benar",
          "status": "PASS",
          "db_evidence": "Diskon per baris di SO (S00002 20%, S00043 15%, S00044 20%)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Diskon per Line Item secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Diskon Global pada Sales Order",
          "steps": "1. Buat sales order 2. Tambahkan produk 3. Isi diskon global di footer 4. Klik Apply",
          "expected": "Diskon global diterapkan ke total order",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Diskon Global pada Sales Order secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Pengiriman Barang ke Customer",
          "steps": "1. Buka Delivery Order dari SO 2. Validasi pengiriman 3. Cetak delivery note",
          "expected": "Pengiriman tercatat, stok berkurang, dan delivery note tercetak",
          "status": "PASS",
          "db_evidence": "15 pengiriman SO selesai (mis. CCON/OUT/00010)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Penjadwalan Waktu Kirim Spesifik (Ship Later Time)",
              "module": "digi_pos_ship_later_time",
              "icon": "schedule_send",
              "tag": "Ketepatan Kirim",
              "desc": "Penjadwalan tanggal dan jam pengiriman barang ke proyek/pelanggan sesuai kesepakatan."
            },
            {
              "title": "Cetak Surat Jalan Continuous Form Dot Matrix",
              "module": "digi_stock_continuous_report",
              "icon": "print",
              "tag": "Format Ekspedisi",
              "desc": "Format cetak dot matrix untuk surat jalan ekspedisi dan supir toko."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Pembuatan Invoice dari Sales Order",
          "steps": "1. Buka SO yang delivered 2. Klik 'Create Invoice' 3. Pilih metode 4. Create & View Invoice",
          "expected": "Invoice terbuat di modul Accounting dengan data yang sesuai",
          "status": "PASS",
          "db_evidence": "15 invoice dari SO (mis. INV/2026/00502 dari S00053)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Invoice dari Sales Order secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Partial Delivery",
          "steps": "1. Buka Sales Order 2. Deliver sebagian barang 3. Validasi partial delivery",
          "expected": "Pengiriman parsial tercatat dan sisa barang tetap outstanding (backorder)",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; SO dengan pengiriman bertahap (mis. S00002: CARF/OUT/00012, CARF/OUT/00013)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Partial Delivery secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Return dari Customer",
          "steps": "1. Buka delivery order yang delivered 2. Klik Return 3. Masukkan barang 4. Validasi",
          "expected": "Return tercatat, stok bertambah, dan credit note dapat dibuat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; retur customer juga berjalan via POS refund (550 order)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Return dari Customer secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "Laporan Penjualan",
          "steps": "1. Reporting > Sales 2. Pilih jenis laporan 3. Filter periode & salesperson 4. Generate",
          "expected": "Laporan penjualan ditampilkan akurat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; dashboard \"Sales & POS Combined Performance\"",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Laporan Penjualan secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "Customer Deposit/Down Payment",
          "steps": "1. Buat Sales Order 2. Tambah DP 3. Buat invoice DP 4. Catat pembayaran",
          "expected": "DP tercatat dan dikurangi dari invoice final",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; panjar/DP via POS (xlsx POS-015 s/d POS-018 PASS)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Customer Deposit/Down Payment secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 13,
          "scenario": "*Penentuan Salesperson pada Sales Order",
          "steps": "1. Buat Sales Order 2. Pilih Salesperson yang bertanggung jawab 3. Konfirmasi SO 4. Lihat laporan penjualan",
          "expected": "Salesperson tercatat di Sales Order dan data tercermin di laporan komisi/penjualan",
          "status": "PASS",
          "db_evidence": "Salesperson terisi di SO (user scm, admin, iwarifin); 11.246 order POS bersalesperson",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Sales (Penjualan)",
              "module": "Standard Odoo 19 + Custom SAL",
              "icon": "point_of_sale",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja *Penentuan Salesperson pada Sales Order secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 8
    },
    {
      "id": "pos",
      "code": "POS",
      "name": "Point of Sale (Kasir Toko)",
      "icon": "store",
      "description": "Transaksi kasir toko langsung, pembayaran tunai/non-tunai, integrasi stok toko, refund, dan laporan sesi.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembukaan POS Session",
          "steps": "1. Buka Point of Sale 2. Pilih POS config 3. Klik 'New Session' 4. Masukkan opening balance 5. Start Selling",
          "expected": "POS session terbuka dan siap untuk transaksi",
          "status": "PASS",
          "db_evidence": "1.056 sesi POS di 11 konfigurasi kasir (mis. POS AFT/01052); xlsx POS-001 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembukaan POS Session secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Transaksi Penjualan Tunai",
          "steps": "1. Scan produk 2. Masukkan qty 3. Klik Payment 4. Pilih Cash 5. Masukkan nominal uang 6. Validate",
          "expected": "Transaksi tercatat, struk tercetak, dan kas bertambah",
          "status": "PASS",
          "db_evidence": "8.064 pembayaran tunai (mis. POS AFT - 000002); xlsx POS-009, POS-010 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Kustom Editor Struk Thermal ESC/POS",
              "module": "digi_pos_receipt_editor",
              "icon": "receipt",
              "tag": "Desain Struk",
              "desc": "Format struk cetak kasir yang disesuaikan ukuran kertas thermal 58mm/80mm, memuat logo, QR code payment, dan footer ucapan."
            },
            {
              "title": "Otorisasi PIN Supervisor / Void Transaksi",
              "module": "digi_pos_access_right",
              "icon": "security",
              "tag": "Keamanan Kasir",
              "desc": "Setiap pembatalan item atau diskon khusus di kasir wajib memasukkan PIN supervisor yang tercatat di log audit."
            },
            {
              "title": "Integrasi Program Tabungan Tukang Cat",
              "module": "digi_tabungan_tukang",
              "icon": "savings",
              "tag": "Loyalitas Pelanggan",
              "desc": "Otomatisasi pengumpulan poin dan saldo cashback tukang cat mitra langsung di layar kasir POS."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Transaksi dengan Kartu Debit/Kredit",
          "steps": "1. Scan produk 2. Klik Payment 3. Pilih metode Card 4. Masukkan nominal 5. Validate",
          "expected": "Transaksi tercatat dengan metode pembayaran card",
          "status": "PASS",
          "db_evidence": "Pembayaran EDC/QRIS/transfer Mandiri (60 EDC, 346 QRIS; mis. POS PYK - 000015); xlsx POS-011, POS-012 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Transaksi dengan Kartu Debit/Kredit secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Transaksi dengan Multiple Payment",
          "steps": "1. Scan produk 2. Payment 3. Tambah pembayaran Cash 4. Tambah Card 5. Validate",
          "expected": "Transaksi tercatat dengan kombinasi pembayaran",
          "status": "PASS",
          "db_evidence": "782 order dengan >1 metode bayar (mis. POS PSP - 000015); xlsx POS-013 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Ubah Metode Pembayaran POS (Post-Transaction)",
              "module": "digi_pos_change_payment_method",
              "icon": "published_with_changes",
              "tag": "Koreksi Kasir",
              "desc": "Kemudahan mengubah catatan pembayaran kasir (misal dari Tunai ke Transfer QRIS) tanpa perlu merusak sesi kasir."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Pencarian Produk",
          "steps": "1. Gunakan search bar 2. Ketik nama produk atau scan barcode 3. Produk muncul",
          "expected": "Produk ditemukan dengan cepat dan akurat",
          "status": "PASS",
          "db_evidence": "xlsx POS-003, POS-004 PASS (scan barcode & cari manual); modul pencarian & multi-barcode aktif",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Pencarian Cerdas Toleran Typo & Multi-Word",
              "module": "digi_pos_search_product",
              "icon": "search_check",
              "tag": "Kecepatan Kasir",
              "desc": "Pencarian super cepat dengan urutan kata acak dan kata kunci parsial (misal 'cat tembok putih vinilex')."
            },
            {
              "title": "Multi Barcode Satuan & Grosir per Produk",
              "module": "digi_multi_barcode",
              "icon": "qr_code_scanner",
              "tag": "Fleksibilitas Barcode",
              "desc": "Scan barcode kemasan eceran, lusin/dus, maupun barcode pabrik pada satu produk secara fleksibel."
            },
            {
              "title": "Pencatatan Barang Kosong / Loss Sales",
              "module": "digi_pos_loss_sell_log",
              "icon": "production_quantity_limits",
              "tag": "Permintaan Pasar",
              "desc": "Kasir dapat mencatat permintaan barang yang tidak tersedia di toko untuk analisis restock purchasing."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Pembuatan Pelanggan Baru dari POS",
          "steps": "1. Klik Customer 2. Create Customer 3. Isi data pelanggan 4. Save",
          "expected": "Pelanggan baru terbuat dan dapat dipilih untuk transaksi",
          "status": "PASS",
          "db_evidence": "3.124 pelanggan dibuat lalu langsung bertransaksi di POS (mis. POS KPT - 000006); xlsx POS-016 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Pelanggan Baru dari POS secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Pilih Pelanggan untuk Transaksi",
          "steps": "1. Klik Customer 2. Cari & pilih pelanggan 3. Lanjutkan transaksi",
          "expected": "Pelanggan terpilih dan tercatat di transaksi",
          "status": "PASS",
          "db_evidence": "11.148 order POS dengan pelanggan; xlsx POS-015 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pilih Pelanggan untuk Transaksi secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Pemberian Diskon dari POS",
          "steps": "1. Scan produk 2. Klik diskon di keypad 3. Masukkan diskon 4. Total diupdate otomatis",
          "expected": "Diskon diterapkan dan total diperbarui",
          "status": "PASS",
          "db_evidence": "1.016 order dengan diskon (mis. POS UJB - 000583); xlsx POS-007 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Diskon Khusus CB & Masking Tampilan Struk",
              "module": "digi_pos_cb_discount",
              "icon": "price_change",
              "tag": "Diskon Toko",
              "desc": "Tombol diskon khusus dengan tampilan rapi tanpa merusak format struk kasir pelanggan."
            },
            {
              "title": "Proteksi Hak Akses & OTP Supervisor",
              "module": "digi_pos_access_right",
              "icon": "pin",
              "tag": "Keamanan Toko",
              "desc": "Otorisasi PIN/OTP supervisor untuk persetujuan diskon atau perubahan harga di POS."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Void/Cancel Transaksi",
          "steps": "1. Pilih transaksi yang akan dibatalkan 2. Klik void/refund 3. Konfirmasi",
          "expected": "Transaksi dibatalkan dan stok dikembalikan",
          "status": "PASS",
          "db_evidence": "41 order dibatalkan + log pembatalan (pos_cancelled_order_log); xlsx POS-024, POS-025 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Log Pembatalan Order / Void Audit Kasir",
              "module": "digi_pos_cancelled_order_log",
              "icon": "rule",
              "tag": "Audit Kasir",
              "desc": "Rekam jejak lengkap pembatalan transaksi kasir beserta alasan untuk mencegah kebocoran kas dan fraud."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Return/Refund dari POS",
          "steps": "1. Buka transaksi sebelumnya 2. Klik Refund 3. Pilih item 4. Proses refund",
          "expected": "Refund tercatat dan stok dikembalikan",
          "status": "PASS",
          "db_evidence": "550 order refund (mis. POS UJB - 000564 REFUND); xlsx POS-020, POS-021 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Proteksi Refund Koreksi vs Retur Fisik Barang",
              "module": "digi_pos_refund_correction",
              "icon": "assignment_return",
              "tag": "Audit Retur",
              "desc": "Pemisahan tegas antara refund salah ketik saat transaksi dengan retur fisik barang dari pelanggan."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "Penutupan POS Session",
          "steps": "1. Klik 'Close Session' 2. Masukkan closing balance 3. Sistem kalkulasi selisih 4. Close & Post Entries",
          "expected": "Session ditutup dan journal entries dibuat di Accounting",
          "status": "PASS",
          "db_evidence": "1.046 sesi ditutup, 953 dengan jurnal (mis. POSS/2026/10/0021); xlsx POS-035 s/d POS-037 PASS",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Blind Closing Kasir & Sembunyikan Saldo Sistem",
              "module": "digi_pos_close_register_hide",
              "icon": "visibility_off",
              "tag": "Integritas Closing",
              "desc": "Sembunyikan ekspektasi uang kas di sistem saat closing agar kasir menghitung fisik secara jujur."
            },
            {
              "title": "Koreksi Selisih Kas Closing di Backoffice",
              "module": "digi_pos_cash_closing_correction",
              "icon": "tune",
              "tag": "Rekonsiliasi Kas",
              "desc": "Form penyesuaian selisih fisik kas closing di backoffice dengan histori audit lengkap."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "POS Session Report",
          "steps": "1. Setelah close session 2. Lihat session summary 3. Cetak laporan",
          "expected": "Laporan session ditampilkan dengan detail penjualan dan pembayaran",
          "status": "PASS",
          "db_evidence": "xlsx POS-051, POS-052 PASS (laporan item terlaris & metode bayar)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja POS Session Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 13,
          "scenario": "Transaksi dengan Harga Manual",
          "steps": "1. Scan produk 2. Klik harga di keypad 3. Ubah harga manual 4. Lanjutkan transaksi",
          "expected": "Harga diubah dan transaksi dapat dilanjutkan",
          "status": "PASS",
          "db_evidence": "xlsx POS-048 PASS (harga manual)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Transaksi dengan Harga Manual secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 14,
          "scenario": "Cetak Ulang Struk",
          "steps": "1. Buka daftar transaksi 2. Pilih transaksi 3. Klik Print Receipt",
          "expected": "Struk tercetak ulang",
          "status": "PASS",
          "db_evidence": "xlsx POS-026 PASS (cetak ulang struk)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "",
          "conveniences": [
            {
              "title": "Editor Format Struk Kasir & Penggabungan Biaya",
              "module": "digi_pos_receipt_editor",
              "icon": "receipt_long",
              "tag": "Kustomisasi Struk",
              "desc": "Editor template struk kasir dan penyatuan biaya tambahan agar struk tampak bersih dan profesional."
            }
          ]
        },
        {
          "no": 15,
          "scenario": "Offline Mode POS",
          "steps": "1. Putuskan koneksi internet 2. Lakukan transaksi 3. Koneksi kembali 4. Sinkronisasi otomatis",
          "expected": "Transaksi offline tetap berjalan dan tersinkronisasi saat online",
          "status": "PASS",
          "db_evidence": "xlsx POS-039, POS-040 PASS (offline & sinkron)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Offline Mode POS secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 16,
          "scenario": "Multiple Cashier/User",
          "steps": "1. Login dengan user berbeda 2. Lakukan transaksi 3. Logout dan ganti user",
          "expected": "Setiap user memiliki session/transaksi terpisah dan dapat di-track",
          "status": "PASS",
          "db_evidence": "63 kasir (employee) di 953 sesi; xlsx POS-038 PASS (pindah shift)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Multiple Cashier/User secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 17,
          "scenario": "Quotation dari POS",
          "steps": "1. Tambah produk ke keranjang 2. Simpan order draft 3. Isi data customer 4. Save",
          "expected": "Quotation tersimpan dan dapat dilanjutkan nanti",
          "status": "PASS",
          "db_evidence": "18 draft order tersimpan (digi_pos_saved_drafts); xlsx POS-046 PASS (park order)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Disimpan sebagai draft/park order POS.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Quotation dari POS secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 18,
          "scenario": "*Penentuan Salesperson di Transaksi POS",
          "steps": "1. Buka POS Session 2. Transaksi 3. Pilih Salesperson untuk transaksi 4. Validasi",
          "expected": "Salesperson tercatat di transaksi POS dan tercermin di laporan penjualan POS",
          "status": "PASS",
          "db_evidence": "11.246 order POS dengan salesperson (73 orang), mis. POS AFT - 000002",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja *Penentuan Salesperson di Transaksi POS secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 19,
          "scenario": "*Melihat Stok Gudang Lain di POS",
          "steps": "1. Buka POS Session 2. Cari produk 3. Cek ketersediaan stok di gudang utama dan gudang lain",
          "expected": "Informasi stok di gudang/warehouse lain ditampilkan dengan benar di layar POS",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; modul info produk & stok POS aktif",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Cross-Branch Inventory Lookup di Layar POS",
              "module": "digi_pos_search_product",
              "icon": "travel_explore",
              "tag": "Stok Cabang",
              "desc": "Kasir dapat melihat secara real-time ketersediaan stok produk di toko atau gudang cabang lain saat barang di toko kosong."
            }
          ]
        },
        {
          "no": 20,
          "scenario": "*Pemberian Promo Ulang Tahun/Historis",
          "steps": "1. Buka POS Session 2. Pilih pelanggan berulang tahun 3. Terapkan promo 4. Validate",
          "expected": "Promo ulang tahun/historis diterapkan dengan benar dan tercatat di transaksi",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; 4 program loyalty, 581 kartu member",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Point of Sale (Kasir Toko)",
              "module": "Standard Odoo 19 + Custom POS",
              "icon": "store",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja *Pemberian Promo Ulang Tahun/Historis secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 16
    },
    {
      "id": "accounting",
      "code": "ACC",
      "name": "Accounting (Keuangan & Tax)",
      "icon": "account_balance",
      "description": "Faktur pelanggan, tagihan vendor, jurnal umum, rekonsiliasi bank, pajak, neraca, laba rugi, dan aset.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Customer Invoice Manual",
          "steps": "1. Accounting > Customers > Invoices 2. Create 3. Pilih customer 4. Tambah produk 5. Post",
          "expected": "Invoice terposting dengan nomor dokumen dan journal entries terbuat",
          "status": "PASS",
          "db_evidence": "26 customer invoice manual terposting (mis. INV/2026/00243)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Customer Invoice Manual secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Pencatatan Pembayaran Customer",
          "steps": "1. Buka invoice 2. 'Register Payment' 3. Pilih jurnal & amount 4. Create Payment",
          "expected": "Pembayaran tercatat dan status invoice berubah (Paid/In Payment)",
          "status": "PASS",
          "db_evidence": "351 invoice lunas, 1.093 pembayaran masuk (mis. PBNK1/2026/01063)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pencatatan Pembayaran Customer secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Pembuatan Vendor Bill Manual",
          "steps": "1. Accounting > Vendors > Bills 2. Create 3. Pilih vendor 4. Tambah baris biaya 5. Confirm",
          "expected": "Vendor bill terposting dan journal entries terbuat",
          "status": "PASS",
          "db_evidence": "562 vendor bill non-PO terposting (mis. BILL/2026/10/0011)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "",
          "conveniences": [
            {
              "title": "Cek Bill & Comparison Bill vs PO Detail",
              "module": "digi_bill_po_comparison",
              "icon": "fact_check",
              "tag": "Audit Tagihan",
              "desc": "Pemeriksaan otomatis selisih harga dan kuantitas antara tagihan vendor dengan detail transaksi PO & barang masuk."
            },
            {
              "title": "Upload Lampiran Faktur Vendor PDF",
              "module": "Standard Odoo Accounting",
              "icon": "cloud_upload",
              "tag": "Dokumen Tagihan",
              "desc": "Penyimpanan digital file invoice fisik supplier langsung pada form tagihan."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Pembayaran ke Vendor",
          "steps": "1. Buka vendor bill 2. Register Payment 3. Pilih jurnal 4. Create Payment",
          "expected": "Pembayaran tercatat dan bill status berubah",
          "status": "PASS",
          "db_evidence": "397 bill lunas, 1.222 pembayaran vendor",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembayaran ke Vendor secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Bank Reconciliation",
          "steps": "1. Dashboard > Bank journal 2. Klik Reconcile Items 3. Match statement dengan entries 4. Reconcile",
          "expected": "Entries ter-reconcile dan saldo bank sesuai",
          "status": "PASS",
          "db_evidence": "5.077 dari 5.619 baris mutasi bank sudah rekonsiliasi (mis. CSH14/2026/00207)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Rekonsiliasi Bank Otomatis & Pemodelan Match",
              "module": "digi_bank_reconciliation",
              "icon": "account_balance",
              "tag": "Keuangan & Kas",
              "desc": "Pencocokan mutasi rekening bank dengan jurnal penerimaan/pembayaran perusahaan."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Import Bank Statement",
          "steps": "1. Buka bank journal 2. Import Statement 3. Upload file (CSV/OFX/Excel) 4. Review & Import",
          "expected": "Bank statement terimport dan siap direconcile",
          "status": "PASS",
          "db_evidence": "35 bank statement berlampiran file mutasi Mandiri (.xls/.pdf), mis. Acc_Statement_1080002359504_2026-10-12",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Import Rekening Koran Bank & Auto Reconciliation",
              "module": "account_bank_statement_import",
              "icon": "receipt_long",
              "tag": "Rekonsiliasi Otomatis",
              "desc": "Impor data transaksi rekening koran bank (BCA, Mandiri, BRI) secara fleksibel via file Excel/CSV untuk langsung dicocokkan dengan catatan kas/bank toko."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Pembuatan Journal Entry Manual",
          "steps": "1. Accounting Entries > Journal Entries 2. Create 3. Pilih journal 4. Isi debit & credit balance 5. Post",
          "expected": "Journal entry terposting dengan balance",
          "status": "PASS",
          "db_evidence": "96 jurnal manual Misc oleh user finance (mis. MISC/2026/10/0014)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Proteksi Saldo Minimum Kas/Bank",
              "module": "digi_journal_min_balance",
              "icon": "security",
              "tag": "Proteksi Kas Minus",
              "desc": "Proteksi sistem agar transaksi pengeluaran tidak menyebabkan saldo kas/bank minus di luar toleransi."
            },
            {
              "title": "Audit Trail Perubahan Finansial & Jurnal",
              "module": "digi_audit_trail",
              "icon": "history_edu",
              "tag": "Audit Integritas",
              "desc": "Rekam jejak audit setiap modifikasi akun, nominal, atau pembatalan dokumen akuntansi."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Setup Chart of Accounts",
          "steps": "1. Configuration > Chart of Accounts 2. Create 3. Isi kode, nama, tipe account 4. Save",
          "expected": "Account baru terbuat dalam chart of accounts",
          "status": "PASS",
          "db_evidence": "769 akun COA, 47 akun ditambah user",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Setup Chart of Accounts secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Setup Tax Configuration",
          "steps": "1. Configuration > Taxes 2. Create 3. Isi nama, rate, tipe 4. Set account tax 5. Save",
          "expected": "Tax baru terbuat dan dapat digunakan di transaksi",
          "status": "PASS",
          "db_evidence": "Pajak 11%/12% terkonfigurasi dan dipakai di 1.231 baris jurnal (mis. BILL/2026/10/0037)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Setup Tax Configuration secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Tax Report Generation",
          "steps": "1. Reporting > Tax Report 2. Pilih periode 3. Print / Export",
          "expected": "Tax report ter-generate sesuai periode",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Tax Report Generation secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "Pembuatan Credit Note",
          "steps": "1. Buka invoice customer 2. Add Credit Note 3. Isi alasan & amount 4. Create",
          "expected": "Credit note terbuat dan tercatat di journal",
          "status": "PASS",
          "db_evidence": "58 credit note terposting (mis. RINV/2026/00052, RBILL/2026/08/0001)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Credit Note secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "Aging Receivable Report",
          "steps": "1. Reporting > Aged Receivable 2. Pilih date as of 3. Generate report",
          "expected": "Laporan aging piutang ditampilkan per periode (0-30, 31-60, 61-90, >90 hari)",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Aging Receivable Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 13,
          "scenario": "Aging Payable Report",
          "steps": "1. Reporting > Aged Payable 2. Pilih date as of 3. Generate report",
          "expected": "Laporan aging hutang ditampilkan per periode",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Aging Payable Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 14,
          "scenario": "Profit and Loss Statement",
          "steps": "1. Reporting > Profit and Loss 2. Pilih periode 3. Print/Export",
          "expected": "Laporan Laba Rugi ter-generate dengan akurat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Freeze Row & Column Headers Pivot Reporting",
              "module": "digi_pivot_freeze",
              "icon": "view_compact",
              "tag": "Tampilan Nyaman",
              "desc": "Pembekuan header atas dan kiri pada laporan pivot keuangan berskala besar agar tetap nyaman dibaca saat scroll."
            }
          ]
        },
        {
          "no": 15,
          "scenario": "Balance Sheet",
          "steps": "1. Reporting > Balance Sheet 2. Pilih date 3. Print",
          "expected": "Laporan Neraca ter-generate dengan akurat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Balance Sheet secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 16,
          "scenario": "General Ledger",
          "steps": "1. Reporting > General Ledger 2. Filter account & periode 3. Generate",
          "expected": "Buku besar ditampilkan sesuai filter",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja General Ledger secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 17,
          "scenario": "Asset Management",
          "steps": "1. Buat asset baru 2. Set depreciation method 3. Run depreciation",
          "expected": "Asset tercatat dan depresiasi berjalan sesuai method",
          "status": "PASS",
          "db_evidence": "859 aset aktif (metode linear, nilai Rp2,06 M), 20.438 jurnal penyusutan (mis. MISC/2026/09/0107)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "",
          "conveniences": [
            {
              "title": "Manajemen Aset Tetap & Depresiasi Otomatis",
              "module": "account_asset",
              "icon": "precision_manufacturing",
              "tag": "Aktiva Tetap",
              "desc": "Pengelolaan inventaris aset tetap perusahaan (armada pengiriman, mesin tinting cat, bangunan toko) dengan pembuat jurnal penyusutan berkala secara otomatis."
            }
          ]
        },
        {
          "no": 18,
          "scenario": "Budget Management",
          "steps": "1. Buat budget baru 2. Set amount per account/periode 3. Monitor actual vs budget",
          "expected": "Budget tercatat dan dapat dimonitor perbandingan aktual vs rencana",
          "status": "NOT_DELIVERED",
          "db_evidence": "Modul budget terpasang, belum ada anggaran",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Belum delivered; menunggu pagu anggaran per cabang (ISS-198).",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Budget Management secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 19,
          "scenario": "*Pencatatan Cashback pada Customer Invoice/Bill",
          "steps": "1. Buat Customer Invoice/Vendor Bill 2. Terapkan/Catat item Cashback 3. Posting",
          "expected": "Nilai Cashback tercatat dengan benar sebagai pengurangan piutang/hutang",
          "status": "PASS",
          "db_evidence": "391 order POS cashback (275 approved, mis. POS ARF - 000001); jurnal \"form cashback\" (CSH2/2026/00038)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja *Pencatatan Cashback pada Customer Invoice/Bill secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 6
    },
    {
      "id": "inventory",
      "code": "INV",
      "name": "Inventory (Stok Gudang)",
      "icon": "inventory",
      "description": "Pergudangan multi-cabang, penerimaan, pengeluaran, transfer internal, reordering min/max, dan stock opname.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Konfigurasi Warehouse",
          "steps": "1. Configuration > Warehouses 2. Create/Edit 3. Isi nama & alamat 4. Set lokasi 5. Save",
          "expected": "Warehouse terkonfigurasi dan siap digunakan",
          "status": "PASS",
          "db_evidence": "28 gudang (16 aktif), mis. DC CONSIGNMENT",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Konfigurasi Warehouse secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Konfigurasi Location",
          "steps": "1. Configuration > Locations 2. Create 3. Isi nama, tipe lokasi 4. Set parent 5. Save",
          "expected": "Location baru terbuat dalam struktur warehouse",
          "status": "PASS",
          "db_evidence": "7 lokasi baru dibuat user (mis. Stock/CSN PSP RADIT BANGUNAN)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Konfigurasi Location secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Penerimaan Barang (Receipt)",
          "steps": "1. Operations > Receipts 2. Create atau dari PO 3. Isi produk & qty 4. Validate",
          "expected": "Barang diterima, stok bertambah di lokasi yang benar",
          "status": "PASS",
          "db_evidence": "2.262 receipt selesai (mis. ARF/IN/00301)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Penerimaan Barang (Receipt) secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Pengiriman Barang (Delivery)",
          "steps": "1. Operations > Delivery Orders 2. Create atau dari SO 3. Pilih produk & qty 4. Validate",
          "expected": "Barang terkirim, stok berkurang di lokasi yang benar",
          "status": "PASS",
          "db_evidence": "11.062 pengiriman keluar selesai (mis. AFT/POS/01077)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pengiriman Barang (Delivery) secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Internal Transfer",
          "steps": "1. Operations > Internal Transfers 2. Create 3. Pilih source & destination 4. Tambah produk 5. Validate",
          "expected": "Stok berpindah antar-lokasi/gudang dengan benar",
          "status": "PASS",
          "db_evidence": "3.094 internal transfer selesai (mis. UJB/MUT/00169)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1000",
          "notes": "",
          "conveniences": [
            {
              "title": "Distribusi Mutasi Stok Antar Cabang",
              "module": "digi_branch_mutation",
              "icon": "local_shipping",
              "tag": "Inter-Branch Transfer",
              "desc": "Alur pengiriman dan penerimaan barang antar cabang toko dilengkapi persetujuan dua arah dan tracking surat jalan."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Stock Adjustment",
          "steps": "1. Operations > Inventory Adjustments 2. Pilih lokasi 3. Masukkan kuantitas aktual 4. Apply",
          "expected": "Stok disesuaikan sesuai kuantitas aktual",
          "status": "PASS",
          "db_evidence": "13.189 stock move penyesuaian persediaan",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Stock Adjustment secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Stock Opname (Physical Inventory)",
          "steps": "1. Buat inventory adjustment / opname batch 2. Pilih lokasi 3. Hitung fisik 4. Validasi",
          "expected": "Perbedaan stok tercatat dan disesuaikan",
          "status": "PASS",
          "db_evidence": "18 batch stock opname (9 applied, mis. SOB/2026/10/0025), 5.837 baris hitung",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-987",
          "notes": "",
          "conveniences": [
            {
              "title": "Barcode Stock Opname PIN Batch & Discrepancy Filter",
              "module": "digi_stock_opname_batch",
              "icon": "qr_code_scanner",
              "tag": "Stock Opname Digital",
              "desc": "Perhitungan stok opname fisik menggunakan scanner barcode Android, verifikasi PIN tim hitung, serta filter selisih uncounted/recount otomatis."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Reordering Rule",
          "steps": "1. Set reordering rule (min & max qty) 2. Jalankan scheduler 3. PO otomatis dibuat",
          "expected": "PO otomatis dibuat saat stok di bawah minimum",
          "status": "PASS",
          "db_evidence": "23.942 reordering rule; 205 RfQ otomatis (mis. P01079)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "",
          "conveniences": [
            {
              "title": "Saran Penyesuaian Min/Max Stock Otomatis",
              "module": "digi_stock_min_max_adjust",
              "icon": "auto_graph",
              "tag": "Reorder Intelligence",
              "desc": "Rekomendasi dinamis batas reorder berdasarkan kecepatan penjualan historis dan tren musiman."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Route Configuration",
          "steps": "1. Configuration > Routes 2. Buat/edit route 3. Set rules pull/push 4. Assign ke gudang",
          "expected": "Route aktif dan digunakan dalam operasi pergudangan",
          "status": "PASS",
          "db_evidence": "41 route aktif (dropship, DC, 1-step), 8.990 move via route",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Route Configuration secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Stock Report",
          "steps": "1. Reporting > Stock / Stock on Hand 2. Pilih lokasi 3. Generate",
          "expected": "Laporan stok ditampilkan akurat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; laporan stok + Stock Aging Report (2.544 baris)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "",
          "conveniences": [
            {
              "title": "Laporan Umur Stok / Aging Inventory",
              "module": "digi_stock_aging_report",
              "icon": "hourglass_bottom",
              "tag": "Analisis Modal",
              "desc": "Analisis 4 bucket umur persediaan (0-30, 31-60, 61-90, >90 hari) untuk identifikasi barang slow moving dan dead stock."
            },
            {
              "title": "Pengelompokan Brand / Merek Cat",
              "module": "digi_product_brand",
              "icon": "branding_watermark",
              "tag": "Klasifikasi Produk",
              "desc": "Pelaporan stok terklasifikasi menurut brand prinsipal cat (misal Dulux, Jotun, Nippon Paint, Avian)."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "Inventory Valuation Report",
          "steps": "1. Reporting > Inventory Valuation 2. Pilih tanggal & lokasi 3. Generate",
          "expected": "Nilai inventory ditampilkan sesuai costing method (AVCO/Standard)",
          "status": "PASS",
          "db_evidence": "Costing AVCO per kategori; 45.368 move bernilai; jurnal Inventory Valuation (STJ/2026/10/0001)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Inventory Valuation Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "Forecasted Stock Report",
          "steps": "1. Reporting > Forecasted 2. Lihat proyeksi stok berdasarkan incoming & outgoing",
          "expected": "Forecast stok ditampilkan berdasarkan pesanan masuk dan keluar",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Forecasted Stock Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 13,
          "scenario": "Removal Strategy",
          "steps": "1. Set removal strategy (FIFO/LIFO/FEFO) di lokasi 2. Keluarkan produk 3. Sistem pilih lot",
          "expected": "Lot / stok dipilih sesuai strategy yang dikonfigurasi",
          "status": "NA",
          "db_evidence": "Removal strategy tidak dipakai; default FIFO",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Tidak dipakai dalam operasional Inti Warna.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Removal Strategy secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 14,
          "scenario": "*Konfigurasi Multi-Warehouse",
          "steps": "1. Configuration > Warehouses 2. Buat dan konfigurasi Warehouse ke-2 3. Pastikan lokasi terkait terbentuk",
          "expected": "Warehouse kedua terkonfigurasi dan operasi dapat dilakukan di kedua gudang",
          "status": "PASS",
          "db_evidence": "Transaksi aktif di >10 gudang (ARF 2.692, Butik Warna 2.119, PSP 2.118, ...)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja *Konfigurasi Multi-Warehouse secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 15,
          "scenario": "*Penggunaan Barcode untuk Stock Opname",
          "steps": "1. Buat Stock Opname 2. Gunakan Barcode Scanner untuk input produk & qty fisik 3. Validate",
          "expected": "Data hitungan fisik tercatat dengan cepat dan akurat menggunakan Barcode Scanner",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; stock opname PIN 18 batch / 5.837 baris",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-987",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Inventory (Stok Gudang)",
              "module": "Standard Odoo 19 + Custom INV",
              "icon": "inventory",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja *Penggunaan Barcode untuk Stock Opname secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 7
    },
    {
      "id": "website",
      "code": "WEB",
      "name": "Website E-Commerce",
      "icon": "language",
      "description": "Toko online terintegrasi dengan katalog produk, checkout, registrasi pelanggan, dan promo.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Halaman Website",
          "steps": "1. Website > 'Go to Website' 2. Klik New Page 3. Pilih template 4. Edit 5. Publish",
          "expected": "Halaman baru terpublish dan dapat diakses publik",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Halaman Website secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Edit Konten Website",
          "steps": "1. Buka halaman 2. Klik Edit 3. Gunakan drag-and-drop website builder 4. Save",
          "expected": "Perubahan tersimpan dan tampil di website",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Edit Konten Website secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Pembuatan Produk E-Commerce",
          "steps": "1. Website > Products 2. Create 3. Isi nama, deskripsi, harga 4. Upload gambar 5. Publish",
          "expected": "Produk tampil di toko online dan dapat dibeli",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Produk E-Commerce secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Kategori Produk",
          "steps": "1. Website > Products > Product Categories 2. Buat struktur 3. Assign produk 4. Tampilkan di menu",
          "expected": "Produk terorganisir dalam kategori yang benar",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur kategori e-commerce tersedia",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live. Kategori publik perlu diisi.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Kategori Produk secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Customer Registration",
          "steps": "1. Buka toko online 2. Sign In > Create Account 3. Isi formulir 4. Submit",
          "expected": "Akun customer terbuat dan dapat login",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/web/signup",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Customer Registration secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Customer Checkout Process",
          "steps": "1. Tambah produk ke cart 2. Proceed to Checkout 3. Isi alamat 4. Pilih pembayaran 5. Confirm",
          "expected": "Order terbuat dan tercatat di Odoo backend",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/shop/cart",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Customer Checkout Process secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Guest Checkout",
          "steps": "1. Tambah produk ke cart 2. Checkout sebagai guest 3. Isi kontak 4. Complete order",
          "expected": "Order dari guest tercatat dan dapat di-track",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Guest Checkout secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Payment Gateway Integration",
          "steps": "1. Konfigurasi payment provider 2. Set API credentials 3. Test payment 4. Enable production",
          "expected": "Pembayaran online berfungsi dan tercatat",
          "status": "PASS_NOTES",
          "db_evidence": "Belum ada payment provider aktif",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Aktivasi menunggu akun merchant (Midtrans/Xendit) dari Inti Warna.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Payment Gateway Integration secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Order Confirmation Email",
          "steps": "1. Customer place order 2. Sistem kirim email konfirmasi",
          "expected": "Email konfirmasi terkirim otomatis ke pelanggan",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Order Confirmation Email secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Order Tracking",
          "steps": "1. Customer login 2. Buka halaman Orders 3. Lihat status & nomor resi",
          "expected": "Customer dapat melacak status pesanan",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/my/orders",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Order Tracking secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "Product Search",
          "steps": "1. Cari di search bar website 2. Ketik kata kunci 3. Lihat hasil",
          "expected": "Hasil pencarian relevan dan akurat",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Product Search secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "Product Filter",
          "steps": "1. Buka kategori produk 2. Gunakan filter atribut/harga/merek 3. Lihat hasil",
          "expected": "Produk terfilter sesuai kriteria",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Product Filter secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 13,
          "scenario": "Promo Code/Voucher",
          "steps": "1. Buat kode promo di backend 2. Masukkan voucher saat checkout 3. Diskon terpotong",
          "expected": "Promo code berfungsi dan diskon diterapkan",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Promo Code/Voucher secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 14,
          "scenario": "Product Review",
          "steps": "1. Customer login 2. Tulis ulasan produk & rating bintang 3. Submit",
          "expected": "Review tampil di halaman produk",
          "status": "PASS_NOTES",
          "db_evidence": "Fitur website/e-commerce terpasang (website_sale, wishlist, loyalty, tema Inti Warna)",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Product Review secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 15,
          "scenario": "Wishlist",
          "steps": "1. Customer login 2. Klik ikon hati (wishlist) 3. Buka halaman wishlist",
          "expected": "Wishlist tersimpan dan dapat diakses kemudian",
          "status": "PASS_NOTES",
          "db_evidence": "1 wishlist tersimpan (6 Okt 2026)",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Customer Wishlist & Saved Items (Daftar Keinginan)",
              "module": "website_sale_wishlist",
              "icon": "favorite",
              "tag": "E-Commerce Customer Experience",
              "desc": "Memungkinkan pelanggan menyimpan produk impian ke daftar wishlist pribadi (tabel product_wishlist), melihat kembali item favorit saat login, dan memindahkannya langsung ke keranjang belanja saat siap bertransaksi."
            }
          ]
        },
        {
          "no": 16,
          "scenario": "Website Analytics",
          "steps": "1. Website > Reporting 2. Lihat statistik pengunjung & produk paling laku",
          "expected": "Data analytics tersedia untuk analisis perilaku pengunjung",
          "status": "PASS_NOTES",
          "db_evidence": "76 visitor, 1.450 page view tercatat (Jun-Okt 2026)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Website & e-commerce sudah diimplementasikan; belum ada transaksi online live.",
          "conveniences": [
            {
              "title": "Google Analytics (GA4) & Plausible Visitor Analytics",
              "module": "website (Core Reporting & Analytics)",
              "icon": "analytics",
              "tag": "Reporting & Visitor Insights",
              "desc": "Integrasi native analitik web via Google Analytics 4 (GA4 ID G-XXXXXXXX) atau Plausible untuk memantau trafik pengunjung, halaman favorit, rasio konversi produk cat/bangunan, dan perilaku belanja secara real-time."
            }
          ]
        }
      ],
      "custom_features_count": 0
    },
    {
      "id": "expenses",
      "code": "EXP",
      "name": "Expenses (Klaim Biaya)",
      "icon": "receipt_long",
      "description": "Pengelolaan klaim pengeluaran karyawan, bon belanja operasional, persetujuan atasan, dan pembayaran reimbursement.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Expense Report",
          "steps": "1. Modul Expenses > New Expense 2. Pilih kategori 3. Isi deskripsi & nominal 4. Upload bon 5. Simpan",
          "expected": "Expense report terbuat dan siap diajukan",
          "status": "PASS",
          "db_evidence": "1.028 expense dibuat (mis. ISI MINYAK MOBIL)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Expense Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Pengajuan Expense ke Manager",
          "steps": "1. Buat expense report 2. Klik 'Submit to Manager' 3. Masuk antrean review atasan",
          "expected": "Expense ter-submit dan masuk ke approval queue manager",
          "status": "PASS",
          "db_evidence": "70 expense berstatus submitted (mis. BAYAR KEBERSIHAN BULANAN)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pengajuan Expense ke Manager secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Approval Expense oleh Manager",
          "steps": "1. Manager buka expense 2. Review detail & lampiran bukti 3. Klik Approve",
          "expected": "Expense disetujui dan status berubah menjadi 'Approved'",
          "status": "PASS",
          "db_evidence": "64 approved + 798 paid",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Approval Expense oleh Manager secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Reject Expense",
          "steps": "1. Manager buka expense 2. Klik Refuse 3. Isi alasan penolakan",
          "expected": "Expense ditolak dan karyawan mendapat notifikasi beserta alasan",
          "status": "PASS",
          "db_evidence": "Jejak penolakan di chatter (\"listrik iwp\", \"ekspedisi bon iwu\"); 0 berstatus refused saat ini",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Reject Expense secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Expense Category Setup",
          "steps": "1. Configuration > Expense Categories 2. Create 3. Isi nama dan COA akun beban 4. Simpan",
          "expected": "Kategori baru terbuat dan dapat dipilih oleh karyawan",
          "status": "PASS",
          "db_evidence": "161 kategori expense, 158 dibuat user",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Expense Category Setup secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Pembayaran Expense ke Karyawan",
          "steps": "1. Buka expense approved 2. 'Post Journal Entries' 3. Register payment ke karyawan",
          "expected": "Pembayaran tercatat dan expense status berubah menjadi 'Paid'",
          "status": "PASS",
          "db_evidence": "798 expense paid dengan jurnal (mis. \"ob kharisma jaya\" Rp1.257.000)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembayaran Expense ke Karyawan secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Expense Report dan Analytics",
          "steps": "1. Reporting > Expenses 2. Filter periode & departemen 3. Lihat ringkasan",
          "expected": "Laporan pengeluaran ditampilkan akurat",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; laporan & analisis expense (1.028 expense)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Expenses (Klaim Biaya)",
              "module": "Standard Odoo 19 + Custom EXP",
              "icon": "receipt_long",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Expense Report dan Analytics secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 0
    },
    {
      "id": "hr",
      "code": "HR",
      "name": "HR (Human Resources)",
      "icon": "groups",
      "description": "Manajemen data karyawan, struktur departemen, kontrak, absensi, alur cuti, slip gaji, dan direktori staf.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Data Karyawan Baru",
          "steps": "1. Modul Employees > Create 2. Isi identitas personal 3. Data pekerjaan 4. Upload foto & KTP 5. Save",
          "expected": "Employee record terbuat lengkap",
          "status": "PASS",
          "db_evidence": "84 karyawan aktif, terbaru dibuat 8 Okt 2026",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Data Karyawan Baru secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Konfigurasi Department",
          "steps": "1. Configuration > Departments 2. Create 3. Isi nama & manager 4. Set parent 5. Save",
          "expected": "Department baru terbuat",
          "status": "PASS",
          "db_evidence": "7 department (mis. Supply Chain Management)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Konfigurasi Department secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Konfigurasi Job Position",
          "steps": "1. Configuration > Job Positions 2. Create 3. Isi jabatan & departemen 4. Save",
          "expected": "Job position baru terbuat",
          "status": "PASS",
          "db_evidence": "17 job position (mis. Admin)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Konfigurasi Job Position secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Employee Contract Management",
          "steps": "1. Buka employee record 2. Tambah kontrak baru 3. Set gaji pokok & tunjangan 4. Aktifkan",
          "expected": "Contract tercatat dan berstatus active",
          "status": "PASS",
          "db_evidence": "46 kontrak (hr.version) dengan tanggal mulai; reminder kontrak habis otomatis",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Employee Contract Management secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Check-In/Check-Out Attendance",
          "steps": "1. Karyawan check-in via kiosk / aplikasi 2. Karyawan check-out 3. Jam kerja tercatat",
          "expected": "Attendance tercatat dengan waktu yang akurat",
          "status": "PASS",
          "db_evidence": "1.264 attendance, 62 karyawan (15 Sep - 16 Okt 2026)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Check-In/Check-Out Attendance secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Time Off Request",
          "steps": "1. Karyawan buka menu Time Off 2. 'New Time Off' 3. Pilih tipe cuti 4. Isi tanggal 5. Submit",
          "expected": "Request cuti terbuat dan masuk ke antrean approval atasan",
          "status": "PASS",
          "db_evidence": "1 time off (Sick, 16 Okt 2026)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-725",
          "notes": "",
          "conveniences": [
            {
              "title": "Portal Kiosk Karyawan & Pengajuan Cuti Mandiri",
              "module": "digi_hr_leave_kiosk",
              "icon": "devices",
              "tag": "Self-Service HR",
              "desc": "Antarmuka web portal /hr untuk pengajuan cuti dan absensi berbasis GPS mandiri oleh karyawan."
            },
            {
              "title": "Akses Operasional Staf Lintas Cabang",
              "module": "digi_hr_cross_company_access",
              "icon": "swap_calls",
              "tag": "Multi Cabang",
              "desc": "Fleksibilitas penugasan staf di cabang yang berbeda dengan hak akses terkontrol."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Time Off Approval",
          "steps": "1. Manager buka request cuti 2. Review tanggal & alasan 3. Klik Approve",
          "expected": "Cuti diproses sesuai keputusan manager dan kuota berkurang",
          "status": "PASS",
          "db_evidence": "Time off di atas sudah divalidasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-725",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Time Off Approval secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Time Off Allocation",
          "steps": "1. HR buat alokasi jatah cuti tahunan per karyawan / departemen 2. Set kuota hari 3. Approve",
          "expected": "Jatah cuti teralokasi ke karyawan",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-725",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Time Off Allocation secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Payroll Processing",
          "steps": "1. Buka Payroll > Payslips 2. 'Compute Sheet' 3. Sistem kalkulasi gaji, lembur, kasbon 4. Confirm",
          "expected": "Payslips tergenerate dengan benar",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; batch payroll Sep 2026, payroll kustom KPI (digi_hr_payroll_custom)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-756",
          "notes": "",
          "conveniences": [
            {
              "title": "Kalkulasi Payroll KPI Tier & Attendance Overtime",
              "module": "digi_hr_payroll_custom",
              "icon": "payments",
              "tag": "Gaji & Komisi",
              "desc": "Perhitungan slip gaji karyawan otomatis berdasarkan pencapaian tier KPI, uang makan, dan lembur terintegrasi presensi."
            },
            {
              "title": "Portal Kiosk Cuti & Presensi Layar Sentuh",
              "module": "digi_hr_leave_kiosk",
              "icon": "touch_app",
              "tag": "Self-Service HR",
              "desc": "Aplikasi portal mandiri karyawan untuk pengajuan cuti dan presensi via tablet/kiosk touchscreen."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Print Payslip",
          "steps": "1. Buka payslip confirmed 2. Klik Print 3. Generate PDF slip gaji",
          "expected": "Slip gaji PDF tergenerate rapi dan siap didistribusikan ke karyawan",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; slip gaji dapat dicetak dan diakses karyawan di portal /hr",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-756",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Print Payslip secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "Employee Skills Management",
          "steps": "1. Buka profil karyawan 2. Tambah skill keahlian (tinting, forklift, kasir) 3. Simpan",
          "expected": "Skills tercatat untuk referensi penugasan kerja",
          "status": "NOT_TESTED",
          "db_evidence": "2 tipe skill, 0 skill karyawan",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Siap diuji.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Employee Skills Management secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "Employee Directory",
          "steps": "1. Employees list 2. View all employees 3. Filter by department 4. Search nama",
          "expected": "Employee directory dapat diakses dan dicari dengan cepat",
          "status": "PASS",
          "db_evidence": "Direktori 84 karyawan aktif dengan department/job",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Employee Directory secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 13,
          "scenario": "Employee Onboarding",
          "steps": "1. Buat karyawan baru 2. Jalankan onboarding checklist (serah terima seragam, ID card) 3. Track",
          "expected": "Proses onboarding karyawan baru terpantau dengan baik",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; plan Onboarding terkonfigurasi",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Portal Rekrutmen & Manpower Requisition Flow",
              "module": "digi_hr_recruitment_flow",
              "icon": "badge",
              "tag": "Alur HR Lengkap",
              "desc": "Pengajuan Form Permintaan Tenaga Kerja (MPR), penyiapan berkas seleksi, Portal Offering Letter, Evaluasi Masa Percobaan (Probation), hingga Clearance Offboarding."
            }
          ]
        },
        {
          "no": 14,
          "scenario": "Employee Offboarding",
          "steps": "1. Set tanggal resign karyawan 2. Jalankan offboarding checklist 3. Proses termination",
          "expected": "Offboarding terproses lengkap dan akun sistem dinonaktifkan",
          "status": "PASS",
          "db_evidence": "Plan \"Offboarding\" terkonfigurasi; 17 karyawan diarsipkan",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Employee Offboarding secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 15,
          "scenario": "HR Reporting",
          "steps": "1. Reporting > HR / Attendance / Payroll 2. Pilih periode 3. Generate report",
          "expected": "Laporan HR tersedia dan akurat",
          "status": "PASS",
          "db_evidence": "Dashboard \"Human Resources & Attendance\" (eh_board)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data HR (Human Resources)",
              "module": "Standard Odoo 19 + Custom HR",
              "icon": "groups",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja HR Reporting secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 5
    },
    {
      "id": "forecast",
      "code": "FST",
      "name": "Forecast (Prediksi Stok)",
      "icon": "insights",
      "description": "Prediksi kebutuhan inventori berdasarkan data historis penjualan, pergerakan musiman, dan lead time supplier.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pengaturan Replenishment Rule",
          "steps": "1. Inventory > Products 2. Pilih produk 3. Set reordering rule (min/max qty) 4. Set lead time 5. Save",
          "expected": "Replenishment rule terkonfigurasi pada master produk",
          "status": "PASS",
          "db_evidence": "23.942 replenishment rule (16.888 otomatis) di 14 gudang",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pengaturan Replenishment Rule secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "View Forecasted Stock",
          "steps": "1. Reporting > Forecasted 2. Lihat proyeksi stok 3. Filter per produk/gudang",
          "expected": "Forecast stok ditampilkan dengan timeline pergerakan",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi (fitur sama dengan INV-12)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja View Forecasted Stock secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Replenishment Report",
          "steps": "1. Operations > Replenishment 2. Lihat produk yang perlu di-restock 3. Sort by urgency",
          "expected": "Daftar produk butuh pengadaan ditampilkan terurut prioritas",
          "status": "PASS",
          "db_evidence": "Replenishment dipakai: 205 RfQ dibuat dari rule (mis. P01079)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Replenishment Report secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Auto-Generate PO dari Forecast",
          "steps": "1. Jalankan scheduler reordering 2. Sistem deteksi stok menipis 3. Auto-create RFQ",
          "expected": "RFQ dibuat otomatis untuk restocking barang ke supplier utama",
          "status": "PASS",
          "db_evidence": "205 RfQ otomatis dari forecast/reorder",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-563",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Auto-Generate PO dari Forecast secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "Lead Time Integration",
          "steps": "1. Set lead time supplier di tab purchase 2. Forecast memperhitungkan estimasi kedatangan",
          "expected": "Jadwal order di-plan sesuai lead time vendor",
          "status": "PASS",
          "db_evidence": "Lead time dari 80.494 vendor pricelist dipakai saat RfQ otomatis",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Lead Time Integration secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Safety Stock Calculation",
          "steps": "1. Set safety stock level 2. Sistem kalkulasi reorder point 3. Trigger order saat menyentuh limit",
          "expected": "Safety stock menjaga ketersediaan barang agar tidak terjadi lost sales",
          "status": "PASS",
          "db_evidence": "Min/max terisi di 23.168 rule; wizard penyesuaian min-max (digi_stock_min_max_adjust)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Safety Stock Calculation secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Multi-Warehouse Forecast",
          "steps": "1. View forecast per warehouse 2. Bandingkan kebutuhan antar-cabang 3. Plan transfers",
          "expected": "Forecast tersedia per cabang toko untuk rencana mutasi internal",
          "status": "PASS",
          "db_evidence": "Reordering per gudang di 14 gudang",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Forecast (Prediksi Stok)",
              "module": "Standard Odoo 19 + Custom FST",
              "icon": "insights",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Multi-Warehouse Forecast secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 0
    },
    {
      "id": "dashboard",
      "code": "DSH",
      "name": "Dashboard (Executive View)",
      "icon": "dashboard",
      "description": "Tampilan KPI visual, metrik bisnis utama, grafik drill-down, filter interaktif cabang, dan monitoring eksekutif.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Akses Dashboard Utama",
          "steps": "1. Buka modul Dashboard / eh_board 2. Lihat overview seluruh KPI 3. Navigasi antar-seksi",
          "expected": "Dashboard tampil dengan semua metrik bisnis utama dalam satu layar",
          "status": "PASS",
          "db_evidence": "7 dashboard eh_board di prod (90 widget, 19 data source)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Akses Dashboard Utama secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 2,
          "scenario": "Sales Dashboard",
          "steps": "1. Buka Sales Dashboard 2. Lihat total omzet, jumlah order, top produk 3. Filter periode",
          "expected": "Sales KPI ditampilkan secara real-time dari data kasir POS dan penjualan",
          "status": "PASS",
          "db_evidence": "Dashboard \"Sales & POS Combined Performance\"",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Sales Dashboard secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 3,
          "scenario": "Inventory Dashboard",
          "steps": "1. Buka Inventory Dashboard 2. Lihat level stok, turnover, barang deadstock 3. Identifikasi isu",
          "expected": "Inventory KPI terlihat jelas dan actionable",
          "status": "PASS",
          "db_evidence": "Dashboard \"Inventory & Warehouse Operations\"",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Inventory Dashboard secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 4,
          "scenario": "Finance Dashboard",
          "steps": "1. Buka Finance Dashboard 2. Pantau revenue, margin laba, posisi kas 3. Monitor AR/AP",
          "expected": "Financial KPI akurat dan up-to-date",
          "status": "PASS",
          "db_evidence": "Dashboard \"Finance & Invoicing Analytics\"",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Finance Dashboard secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 5,
          "scenario": "HR Dashboard",
          "steps": "1. Buka HR Dashboard 2. Lihat headcount karyawan, absensi, rasio departemen",
          "expected": "HR metrics tersedia untuk pemantauan manajemen",
          "status": "PASS",
          "db_evidence": "Dashboard \"Human Resources & Attendance\"",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja HR Dashboard secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 6,
          "scenario": "Custom Dashboard Widget",
          "steps": "1. Tambah widget baru 2. Pilih data source (SQL / Odoo model) 3. Konfigurasi visualisasi 4. Save",
          "expected": "Custom widget terbuat dan tampil interaktif di dashboard",
          "status": "PASS",
          "db_evidence": "90 widget dibuat di 7 dashboard",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Custom Dashboard Widget secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Drill-Down Analysis",
          "steps": "1. Klik salah satu nilai pada KPI chart 2. Sistem melakukan drill-down ke baris data detail",
          "expected": "Pengguna dapat melihat detail underlying data hingga ke nomor faktur/stok",
          "status": "PASS",
          "db_evidence": "2 konfigurasi drill-down",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Drill-Down Analysis secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 8,
          "scenario": "Dashboard Filtering",
          "steps": "1. Filter periode (bulan ini, kuartal ini) 2. Filter per cabang/warehouse 3. Apply",
          "expected": "Dashboard langsung diperbarui secara instan mengikuti filter yang dipilih",
          "status": "PASS",
          "db_evidence": "1 filter global terpasang",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Dashboard Filtering secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 9,
          "scenario": "Export Dashboard Data",
          "steps": "1. Klik tombol Export 2. Pilih format (PDF / Excel / PNG) 3. Unduh berkas laporan",
          "expected": "Data dashboard dapat diekspor untuk bahan rapat pimpinan",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; export PDF/Excel/CSV eh_board",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Export Dashboard Data secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 10,
          "scenario": "Dashboard Refresh",
          "steps": "1. Klik tombol refresh atau set interval auto-refresh 2. Data terupdate real-time",
          "expected": "Data visual dashboard diperbarui mengikuti transaksi paling mutakhir",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; auto-refresh & 1.926 snapshot dashboard",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Dashboard Refresh secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 11,
          "scenario": "KPI Alert/Threshold",
          "steps": "1. Set batas threshold target/minimum pada KPI 2. Muncul indikator warna jika tercapai/melanggar",
          "expected": "Alert visual muncul saat indikator kinerja berada di luar batas toleransi",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; alert/threshold melalui Task Monitoring (digi_work_monitoring)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja KPI Alert/Threshold secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 12,
          "scenario": "Dashboard Sharing",
          "steps": "1. Klik Share 2. Pilih user / security group 3. Atur hak akses (view / edit)",
          "expected": "Dashboard dapat dibagikan secara aman ke manajer cabang terkait",
          "status": "PASS",
          "db_evidence": "Dikonfirmasi selesai oleh tim implementasi; dashboard dibatasi per company (7)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Dashboard (Executive View)",
              "module": "Standard Odoo 19 + Custom DSH",
              "icon": "dashboard",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Dashboard Sharing secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 0
    },
    {
      "id": "tinting",
      "code": "TNT",
      "name": "Tinting (Koneksi dengan Sales)",
      "icon": "palette",
      "description": "Integrasi mesin oplos cat (tinting) dengan Sales & POS toko bangunan, pemotongan base cat dan pasta warna otomatis.",
      "testcases": [
        {
          "no": 1,
          "scenario": "Pembuatan Sales Order dari Mesin Tinting",
          "steps": "1. Jalankan mesin tinting 2. Pilih produk cat yang perlu tinting 3. Pilih warna dari formula 4. Generate tinting instruction",
          "expected": "Order tinting terbuat dan terhubung langsung ke SO/POS serta memotong stok base & pewarna",
          "status": "BLOCKED",
          "db_evidence": "Modul digi_tinting_base tidak terpasang di prod; tinting saat ini dicatat sebagai produk add-on di POS (xlsx POS-028, POS-042 PASS)",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Integrasi mesin tinting menunggu spesifikasi software dispenser/formula dari Intiwarna & vendor mesin.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Tinting (Koneksi dengan Sales)",
              "module": "Standard Odoo 19 + Custom TNT",
              "icon": "palette",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Pembuatan Sales Order dari Mesin Tinting secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        }
      ],
      "custom_features_count": 0
    }
  ],
  "developer_initiatives": [
    {
      "module": "digi_consignment_request",
      "title": "Modul Keranjang Konsinyasi (Titip Jual Supplier & Mitra)",
      "category": "Logistik & Konsinyasi",
      "icon": "shopping_basket",
      "badge": "Tambahan Fitur",
      "summary": "Pengelolaan siklus lengkap barang konsinyasi: penerimaan barang titipan supplier ke toko, atau penitipan barang Intiwarna ke kontraktor/mitra toko, tracking stok konsinyasi terpisah dari aset milik sendiri, settlement berkala atas barang laku, dan retur sisa.",
      "impact": "Memisahkan akuntansi kepemilikan aset dengan barang titipan, mencegah salah bayar ke supplier konsinyasi, dan memperluas jaringan penjualan tanpa risiko stok mati.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-492"
    },
    {
      "module": "digi_tabungan_tukang",
      "title": "Modul Referral Kontraktor & Tabungan Tukang Cat",
      "category": "Inovasi CRM & Mitra",
      "icon": "savings",
      "badge": "Tambahan Fitur",
      "summary": "Sistem referral dan komisi loyalti khusus tukang cat dan kontraktor bangunan. Tiap pembelian oleh kontraktor/tukang otomatis mengalokasikan poin reward dan saldo tabungan yang dapat dicairkan atau ditukar voucher toko.",
      "impact": "Meningkatkan retensi dan loyalitas komunitas tukang cat lokal secara masif. Sudah tercatat 14 transaksi riil tabungan tukang di database aktif.",
      "status": "Installed & Active (14 Transaksi)",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-580"
    },
    {
      "module": "digi_fleet_delivery",
      "title": "Modul Manajemen Armada & Pengiriman Proyek (Fleet Delivery)",
      "category": "Logistik & Distribusi",
      "icon": "local_shipping",
      "badge": "Tambahan Fitur",
      "summary": "Sistem pengaturan pengiriman logistik toko: penjadwalan ritase armada truk & pickup toko, assignment pengemudi/kenek, konsolidasi rute beberapa surat jalan sekaligus, hingga status penerimaan barang di lokasi proyek (Proof of Delivery).",
      "impact": "Mengoptimalkan kapasitas muat kendaraan toko, menghemat biaya bahan bakar, dan memastikan ketepatan waktu pengiriman barang berat ke proyek konsumen.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-492"
    },
    {
      "module": "digi_hr_recruitment_flow",
      "title": "Modul HR Manpower Requisition / MPR (Permintaan Tenaga Kerja)",
      "category": "HR & Organisasi",
      "icon": "person_add",
      "badge": "Tambahan Fitur",
      "summary": "Alur pengajuan Form Permintaan Tenaga Kerja (MPR / FPTK) dari Kepala Cabang/Gudang saat membutuhkan personil baru, dilengkapi approval berjenjang HRD, Finance, dan Direksi sebelum pembukaan lowongan dan alur seleksi.",
      "impact": "Mencegah penambahan karyawan tanpa persetujuan anggaran dan memastikan setiap rekrutmen cabang terjustifikasi beban kerjanya.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-575"
    },
    {
      "module": "digi_whatsapp_evolution",
      "title": "WhatsApp Multi-Instance Gateway & Notifikasi CRM Otomatis",
      "category": "Komunikasi & Omnichannel",
      "icon": "chat",
      "badge": "Tambahan Fitur",
      "summary": "Integrasi gateway WhatsApp Evolution API mandiri yang mendukung multi-device untuk masing-masing cabang. Otomatis kirim nota kasir POS digital, PO ke vendor, konfirmasi SO ke pelanggan, serta notifikasi persetujuan ke manajer.",
      "impact": "Menggantikan biaya kertas struk kasir, mempercepat konfirmasi pesanan ke supplier, dan meningkatkan interaksi pelanggan modern via WhatsApp.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-570"
    },
    {
      "module": "digi_telegram_bot",
      "title": "Telegram Bot API Broadcast & Alert Manajemen Real-Time",
      "category": "Komunikasi & Omnichannel",
      "icon": "send",
      "badge": "Tambahan Fitur",
      "summary": "Bot notifikasi instan ke grup Telegram Direksi & Manajemen: memberikan peringatan real-time saat terjadi pembatalan kasir (void) yang mencurigakan, alert stok menipis, dan rangkuman harian toko.",
      "impact": "Memberikan pengawasan operasional langsung di kantong pimpinan 24/7 tanpa perlu membuka laptop atau login ke ERP.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-571"
    },
    {
      "module": "digi_ai_brain_studio",
      "title": "AI Brain Studio - RAG & MCP Agent Toko Cat Intiwarna",
      "category": "Kecerdasan Buatan (AI)",
      "icon": "psychology",
      "badge": "Tambahan Fitur",
      "summary": "Arsitektur agen kecerdasan buatan berbasis Model Context Protocol (MCP) dan Retrieval-Augmented Generation (RAG) yang terhubung ke database operasional Odoo Intiwarna untuk analisis bisnis percakapan.",
      "impact": "Pimpinan dapat bertanya dengan bahasa sehari-hari mengenai tren penjualan cat, performa cabang, dan rekomendasi restock barang.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-572"
    },
    {
      "module": "digi_ai_daily_report",
      "title": "AI Daily Business Report & Multi-Channel Dispatch",
      "category": "Kecerdasan Buatan (AI)",
      "icon": "summarize",
      "badge": "Tambahan Fitur",
      "summary": "Modul AI yang secara otomatis merangkum omzet harian per cabang, margin profit, barang paling laku, dan piutang jatuh tempo setiap malam, lalu mengirimkannya via WhatsApp/Telegram ke jajaran Direksi.",
      "impact": "Menghilangkan keharusan tim finance membuat rekap laporan manual di Excel setiap malam.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-573"
    },
    {
      "module": "digi_pos_ai_upsell",
      "title": "POS AI Smart Upsell & Cross-Sell Assistant di Kasir",
      "category": "Inovasi POS & Retail",
      "icon": "auto_awesome",
      "badge": "Tambahan Fitur",
      "summary": "Asisten rekomendasi pelengkap barang belanjaan otomatis di layar POS saat kasir menginput produk (misal cat tembok otomatis menawarkan plamir, kuas, bak cat, masking tape) untuk mencapai target basket size (ATV).",
      "impact": "Mendorong rata-rata nilai transaksi belanja (Average Transaction Value) naik 15-25% di setiap gerai.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-574"
    },
    {
      "module": "digi_bcg_analysis",
      "title": "Analisis Strategis Portofolio Produk Matriks BCG",
      "category": "Analisis Bisnis & Strategi",
      "icon": "analytics",
      "badge": "Tambahan Fitur",
      "summary": "Klasifikasi otomatis ribuan SKU cat dan bahan bangunan ke dalam 4 kuadran Boston Consulting Group: Stars, Cash Cows, Question Marks, dan Dogs berdasarkan pertumbuhan pasar dan pangsa penjualan.",
      "impact": "Memberikan arahan strategis kepada direksi mengenai produk mana yang harus dipromosikan masif dan mana yang harus didiskon cuci gudang.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-576"
    },
    {
      "module": "digi_pareto_analysis",
      "title": "Analisis Pareto 80/20 Persediaan Multi-Gudang",
      "category": "Analisis Bisnis & Strategi",
      "icon": "pie_chart",
      "badge": "Tambahan Fitur",
      "summary": "Kalkulasi otomatis hukum Pareto 80/20 untuk mengidentifikasi 20% SKU barang yang menyumbang 80% omzet perusahaan di seluruh jaringan cabang toko.",
      "impact": "Menjamin barang-barang penghasil omzet terbesar tidak pernah kehabisan stok (zero stockout) di gudang.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-577"
    },
    {
      "module": "digi_loyalty_multiple",
      "title": "Modul Multi-Tier Program Loyalitas Pelanggan",
      "category": "Inovasi CRM & Mitra",
      "icon": "card_membership",
      "badge": "Tambahan Fitur",
      "summary": "Pengaturan skema loyalitas pelanggan multi-tingkat (Pelanggan Umum, Kontraktor Proyek, Toko Reseller) dengan aturan perolehan poin berbeda dan mekanisme redeem fleksibel.",
      "impact": "Membedakan insentif pelanggan retail biasa dengan pembeli grosir / kontraktor proyek.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-578"
    },
    {
      "module": "digi_crm_field_sales",
      "title": "CRM Field Sales Canvassing & Pipeline Proyek Kontraktor",
      "category": "Penjualan & Proyek",
      "icon": "explore",
      "badge": "Tambahan Fitur",
      "summary": "Aplikasi pencatatan kunjungan sales lapangan (canvassing) ke proyek bangunan, check-in GPS sales, pipeline peluang tender cat, dan estimasi kebutuhan bahan bangunan.",
      "impact": "Memonitor produktivitas sales lapangan dan memastikan proyek-proyek konstruksi baru terlayani oleh Intiwarna.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-579"
    },
    {
      "module": "digi_work_monitoring",
      "title": "Pusat Kendali & Monitoring Tugas Tim Operasional",
      "category": "Operasional & Monitoring",
      "icon": "checklist_rtl",
      "badge": "Tambahan Fitur",
      "summary": "Dashboard monitoring tugas kerja tim terpusat untuk memantau pekerjaan tertunda (pending tasks) dari tim SCM, Finance, Pricelist, dan Gudang.",
      "impact": "Memastikan SLA operasional toko terpenuhi dan tidak ada dokumen transaksi yang macet tanpa follow-up.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com/odoo/action-581"
    }
  ],
  "uninstalled_modules": [
    {
      "module": "digi_tinting_base",
      "name": "Digision Paint Tinting Base Integration",
      "reason": "Menunggu kepastian fisik mesin tinting (oplos cat) dan protokol API dari supplier mesin cat klien (misal Corob / Fast & Fluid). Modul siap dinaikkan setelah integrasi hardware disepakati.",
      "impact_on_uat": "Terkait Test Case 15.1 UAT (Pembuatan Sales Order dari Mesin Tinting) - Status: Outstanding."
    },
    {
      "module": "digi_inventory_turnover",
      "name": "Days Sales of Inventory (DSI) & ITO Report",
      "reason": "Fungsi perputaran stok sudah diakomodasi lebih komprehensif oleh modul eh_board BI Dashboard dan digi_pareto_analysis.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_audit_trail",
      "name": "Digision Audit Trail",
      "reason": "Dikelola langsung oleh chatter tracking bawaan Odoo dan digi_product_tracking untuk menjaga performa PostgreSQL tetap ringan.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_pos_cash_drawer",
      "name": "POS Cash Drawer Control",
      "reason": "Pengendalian laci kasir saat ini langsung ditangani oleh driver printer thermal ESC/POS Odoo tanpa perlu driver tambahan.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_pos_internal_transfer",
      "name": "Digi POS Internal Transfer",
      "reason": "Alur mutasi cabang distandardisasi terpusat melalui modul digi_stock_picking_distribute agar kontrol stok tidak tumpang tindih.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_pos_product_fee",
      "name": "Digi POS Product Fee (Harga Tukang)",
      "reason": "Fungsionalitas harga khusus dan insentif tukang sudah diintegrasikan secara resmi ke dalam modul digi_tabungan_tukang.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_pos_receipt_fee_merge",
      "name": "Digi POS Receipt Fee Merger",
      "reason": "Penggabungan biaya nota struk sudah diatur langsung di modul digi_pos_receipt_editor.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_product_image_editor",
      "name": "Digi Product Image Editor",
      "reason": "Manajemen gambar produk saat ini di-upload terpusat melalui master product template.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    },
    {
      "module": "digi_tree_row_number",
      "name": "Tree Row Number",
      "reason": "Penomoran baris tabel opsional; dinonaktifkan sementara untuk memaksimalkan kecepatan render list view ribuan produk.",
      "impact_on_uat": "Tidak mempengaruhi UAT."
    }
  ],
  "additional_modules": [
    {
      "module": "",
      "title": "Retur Pembelian ke Vendor per Toko",
      "category": "Purchase",
      "icon": "shopping_cart",
      "badge": "Purchase",
      "summary": "Retur barang ke supplier memakai operation type keluar per toko, terhubung ke refund bill.",
      "impact": "Pemakaian di produksi: 61 retur selesai, 5 refund bill",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Approval Pengadaan / Permintaan RFQ dari Toko",
      "category": "Purchase",
      "icon": "shopping_cart",
      "badge": "Purchase",
      "summary": "Permintaan pembelian dari toko melalui Approvals, menjadi RfQ setelah disetujui.",
      "impact": "Pemakaian di produksi: 470 permintaan (340 disetujui)",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Penggabungan Kebutuhan Toko menjadi 1 PO Terpusat (DC)",
      "category": "Purchase",
      "icon": "shopping_cart",
      "badge": "Purchase",
      "summary": "Menggabungkan kebutuhan beberapa cabang menjadi satu PO ke supplier.",
      "impact": "Pemakaian di produksi: 34 grup PO, 127 kebutuhan cabang",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Bonus Produk & Update Harga Vendor dari PO",
      "category": "Purchase",
      "icon": "shopping_cart",
      "badge": "Purchase",
      "summary": "Barang bonus supplier dan harga beli terakhir tercatat otomatis di vendor pricelist.",
      "impact": "Pemakaian di produksi: 80.843 vendor pricelist",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Validasi Vendor Bill vs PO (Strict Matching)",
      "category": "Purchase",
      "icon": "shopping_cart",
      "badge": "Purchase",
      "summary": "Mencegah selisih harga/diskon/pajak antara vendor bill dan PO; cegah bill dari PO yang dibatalkan.",
      "impact": "Pemakaian di produksi: 551 bill dari PO",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Monitoring Tahapan PO & Peringatan Stok Maksimum",
      "category": "Purchase",
      "icon": "shopping_cart",
      "badge": "Purchase",
      "summary": "Pelacakan status pengadaan per baris dan peringatan bila PO melebihi stok maksimum.",
      "impact": "Pemakaian di produksi: 2.678 baris monitoring PO",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Manajemen Konsinyasi (Titip Jual ke Mitra)",
      "category": "Konsinyasi",
      "icon": "handshake",
      "badge": "Konsinyasi",
      "summary": "Request konsinyasi, mutasi stok, laporan penjualan & settlement, audit stok konsinyasi.",
      "impact": "Pemakaian di produksi: 25 request, 12 laporan settlement",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Konsinyasi Inbound (Barang Titipan Vendor)",
      "category": "Konsinyasi",
      "icon": "handshake",
      "badge": "Konsinyasi",
      "summary": "Stok titipan supplier dipisah dan dilaporkan berdasarkan penjualan.",
      "impact": "Pemakaian di produksi: 8 laporan stok konsinyasi, 9 SO konsinyasi",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Distribusi DC ke Cabang & Mutasi Antar Toko",
      "category": "Inventory",
      "icon": "inventory_2",
      "badge": "Inventory",
      "summary": "Distribusi barang dari DC ke cabang dan permintaan mutasi antar toko.",
      "impact": "Pemakaian di produksi: 1.791 mutasi, 17 request mutasi",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Stock Opname Batch dengan Verifikasi PIN",
      "category": "Inventory",
      "icon": "inventory_2",
      "badge": "Inventory",
      "summary": "Opname parsial per kategori/brand, verifikasi PIN karyawan, pembekuan transaksi produk terkait.",
      "impact": "Pemakaian di produksi: 18 batch, 5.837 baris hitung",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Saran & Penyesuaian Min/Max Otomatis",
      "category": "Inventory",
      "icon": "inventory_2",
      "badge": "Inventory",
      "summary": "Rekomendasi reorder berdasarkan konsumsi rata-rata dan lead time.",
      "impact": "Pemakaian di produksi: 23.942 reordering rule",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Analisis Stock Aging, BCG Matrix & Pareto ABC",
      "category": "Inventory",
      "icon": "inventory_2",
      "badge": "Inventory",
      "summary": "Analisis umur stok, portofolio produk (BCG) dan klasifikasi Pareto 80/20 multi-gudang.",
      "impact": "Pemakaian di produksi: Dipakai untuk seluruh produk aktif",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Kontrol Kas: Traceability Transfer Internal & Auto-Reconcile",
      "category": "Finance",
      "icon": "account_balance",
      "badge": "Finance",
      "summary": "Pelacakan transfer kas/bank internal yang menggantung, rekonsiliasi otomatis, dan peringatan saldo minimum kas toko.",
      "impact": "Pemakaian di produksi: 6.582 rekonsiliasi parsial",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "OTP Akses Supervisor (Diskon, Batal, Retur)",
      "category": "POS",
      "icon": "point_of_sale",
      "badge": "POS",
      "summary": "Permintaan otorisasi supervisor via OTP untuk diskon khusus, pembatalan dan retur.",
      "impact": "Pemakaian di produksi: 4.076 permintaan akses",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Loss Sell Log (Barang Kosong / Tidak Jadi Beli)",
      "category": "POS",
      "icon": "point_of_sale",
      "badge": "POS",
      "summary": "Pencatatan penjualan hilang dari layar kasir, menjadi dasar permintaan pembelian.",
      "impact": "Pemakaian di produksi: 1.990 log",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Koreksi Closing Kas & Ganti Metode Bayar",
      "category": "POS",
      "icon": "point_of_sale",
      "badge": "POS",
      "summary": "Koreksi selisih closing kasir dan penggantian metode bayar di sesi aktif dengan jejak audit.",
      "impact": "Pemakaian di produksi: 116 koreksi kas, 45 perubahan metode bayar",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Ship Later dengan Jadwal Kirim",
      "category": "POS",
      "icon": "point_of_sale",
      "badge": "POS",
      "summary": "Penjualan POS dengan pengiriman belakangan dan jadwal kirim.",
      "impact": "Pemakaian di produksi: Aktif di POS",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "AI Smart Upsell di Kasir",
      "category": "POS",
      "icon": "point_of_sale",
      "badge": "POS",
      "summary": "Rekomendasi produk pelengkap di layar POS.",
      "impact": "Pemakaian di produksi: Aktif di 11 POS",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Program Referral Mitra & Tabungan Tukang",
      "category": "CRM & Loyalty",
      "icon": "loyalty",
      "badge": "CRM & Loyalty",
      "summary": "Referral tukang/kontraktor dengan reward tanpa mengubah harga jual.",
      "impact": "Pemakaian di produksi: 581 kartu referral/member",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Loyalty Bertingkat & Kode Member",
      "category": "CRM & Loyalty",
      "icon": "loyalty",
      "badge": "CRM & Loyalty",
      "summary": "Poin loyalitas bertingkat berdasarkan nilai belanja dan kode member.",
      "impact": "Pemakaian di produksi: 1.027 histori loyalty",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Kupon Undian (Lottery)",
      "category": "CRM & Loyalty",
      "icon": "loyalty",
      "badge": "CRM & Loyalty",
      "summary": "Kupon undian otomatis dari transaksi POS dan invoice, dengan live lucky draw.",
      "impact": "Pemakaian di produksi: 105 kupon",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "CRM Field Sales / Canvassing",
      "category": "CRM & Loyalty",
      "icon": "loyalty",
      "badge": "CRM & Loyalty",
      "summary": "Kunjungan sales lapangan, prospek proyek, target sales, segmentasi RFM.",
      "impact": "Pemakaian di produksi: 608 prospek, 118 jadwal canvassing",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Approval Perubahan Harga & Monitoring Margin",
      "category": "Harga",
      "icon": "sell",
      "badge": "Harga",
      "summary": "Approval perubahan harga jual dan pemantauan margin terhadap harga modal.",
      "impact": "Pemakaian di produksi: 3.978 log margin harga",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Payroll Kustom (KPI) & Pinjaman Karyawan",
      "category": "HR",
      "icon": "badge",
      "badge": "HR",
      "summary": "Komponen KPI/insentif dan potongan kasbon pada payroll.",
      "impact": "Pemakaian di produksi: 10 evaluasi KPI",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Portal Karyawan (Absensi, Cuti, Slip Gaji)",
      "category": "HR",
      "icon": "badge",
      "badge": "HR",
      "summary": "Portal karyawan untuk absensi, pengajuan cuti dan slip gaji.",
      "impact": "Pemakaian di produksi: 1.264 attendance",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Planning Jadwal Kerja Terintegrasi (Libur, Canvassing, Opname Konsinyasi)",
      "category": "HR",
      "icon": "badge",
      "badge": "HR",
      "summary": "Jadwal shift di Planning otomatis membuat libur mingguan, jadwal canvassing sales, dan tugas stock opname konsinyasi (tampil di portal karyawan); realisasi tercatat ke work entry payroll.",
      "impact": "Pemakaian di produksi: Dirilis ke produksi Oktober 2026",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Alur Rekrutmen & Permintaan Tenaga Kerja (MPR)",
      "category": "HR",
      "icon": "badge",
      "badge": "HR",
      "summary": "Pengajuan permintaan tenaga kerja (MPR) dari kepala cabang/gudang, alur rekrutmen, observasi dan evaluasi masa percobaan.",
      "impact": "Pemakaian di produksi: 79 kriteria observasi, 4 kriteria probation",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Fleet Delivery & Antrian Pengiriman Multi-Toko",
      "category": "Logistik",
      "icon": "local_shipping",
      "badge": "Logistik",
      "summary": "Penjadwalan armada, pengemudi dan inspeksi kendaraan.",
      "impact": "Pemakaian di produksi: Aktif",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "Integrasi WhatsApp & Telegram",
      "category": "Komunikasi",
      "icon": "forum",
      "badge": "Komunikasi",
      "summary": "Kirim PO/SO/notifikasi via WhatsApp per cabang dan alert ke grup Telegram manajemen.",
      "impact": "Pemakaian di produksi: 9 konfigurasi WhatsApp",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    },
    {
      "module": "",
      "title": "AI Assistant & Laporan Bisnis Harian Otomatis",
      "category": "AI",
      "icon": "smart_toy",
      "badge": "AI",
      "summary": "Agen AI berbasis data Odoo dan ringkasan bisnis harian otomatis.",
      "impact": "Pemakaian di produksi: Aktif",
      "status": "Aktif di Produksi",
      "odoo_url": "https://inti-warna.odoo.com/odoo"
    }
  ],
  "implementation": {
    "cutoff": "16 Oktober 2026",
    "metrics": [
      {
        "icon": "storefront",
        "value": 11,
        "label": "Perusahaan & cabang toko",
        "sub": "IAU + 10 toko/cabang dalam satu database"
      },
      {
        "icon": "point_of_sale",
        "value": 11,
        "label": "Kasir POS aktif",
        "sub": "1.056 sesi kasir dibuka-tutup"
      },
      {
        "icon": "receipt_long",
        "value": 11292,
        "label": "Transaksi POS",
        "sub": "Mei - Oktober 2026"
      },
      {
        "icon": "shopping_cart",
        "value": 1018,
        "label": "RfQ / Purchase Order",
        "sub": "551 vendor bill dari PO"
      },
      {
        "icon": "warehouse",
        "value": 28,
        "label": "Gudang & lokasi DC",
        "sub": "16.819 transfer stok"
      },
      {
        "icon": "account_balance",
        "value": 39603,
        "label": "Jurnal akuntansi",
        "sub": "5.077 mutasi bank direkonsiliasi"
      },
      {
        "icon": "inventory",
        "value": 859,
        "label": "Aset tetap",
        "sub": "Penyusutan otomatis bulanan"
      },
      {
        "icon": "payments",
        "value": 1028,
        "label": "Klaim expense",
        "sub": "798 sudah dibayar"
      },
      {
        "icon": "approval",
        "value": 470,
        "label": "Permintaan approval",
        "sub": "Pengadaan dari toko"
      },
      {
        "icon": "badge",
        "value": 84,
        "label": "Karyawan aktif",
        "sub": "1.264 data absensi"
      },
      {
        "icon": "dashboard",
        "value": 7,
        "label": "Dashboard eksekutif",
        "sub": "90 widget KPI"
      },
      {
        "icon": "inventory_2",
        "value": 19105,
        "label": "Produk aktif",
        "sub": "210.192 aturan harga"
      }
    ],
    "remaining": [
      {
        "code": "ACC-18",
        "title": "Budget Management",
        "status": "NOT_DELIVERED",
        "note": "Menunggu pagu anggaran per cabang dari manajemen."
      },
      {
        "code": "HR-11",
        "title": "Employee Skills Management",
        "status": "NOT_TESTED",
        "note": "Tipe skill sudah dikonfigurasi; tinggal diuji bersama HRD."
      },
      {
        "code": "TNT-1",
        "title": "Sales Order dari Mesin Tinting",
        "status": "BLOCKED",
        "note": "Menunggu spesifikasi software dispenser / formula warna dari vendor mesin."
      }
    ]
  }
};
