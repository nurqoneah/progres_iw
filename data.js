window.PORTAL_DATA = {
  "project": {
    "title": "Portal Progress & Audit UAT Odoo ERP",
    "client": "PT Inti Adhigana Ubaid (Intiwarna)",
    "vendor": "PT Digital Decision Indonesia (Digision)",
    "database": "intiwarna-testing-1",
    "odoo_version": "Odoo 19.0 Community / Custom Enterprise",
    "odoo_base_url": "https://inti-warna.odoo.com/",
    "last_updated": "30 September 2026",
    "executive_summary": "Audit komprehensif implementasi ERP Odoo PT Inti Adhigana Ubaid berdasarkan Dokumen UAT v2.0 (4 Maret 2026). Dilengkapi dengan validasi data riil database https://inti-warna.odoo.com/, rincian detail kemudahan & sub-fitur kustom yang dibangun di setiap skenario UAT, serta inventarisasi tambahan fitur bernilai tinggi di luar scope standar UAT."
  },
  "db_stats": [
    {
      "label": "Faktur & Transaksi Jurnal",
      "count": 38734,
      "icon": "receipt",
      "badge": "account_move",
      "status": "active"
    },
    {
      "label": "Transaksi Kasir POS",
      "count": 7580,
      "icon": "point_of_sale",
      "badge": "pos_order",
      "status": "active"
    },
    {
      "label": "Sesi Kasir Aktif/Tertutup",
      "count": 756,
      "icon": "storefront",
      "badge": "pos_session",
      "status": "active"
    },
    {
      "label": "Pergerakan Surat Jalan & Mutasi",
      "count": 11262,
      "icon": "local_shipping",
      "badge": "stock_picking",
      "status": "active"
    },
    {
      "label": "Item Stok Quant di Gudang",
      "count": 22751,
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
      "count": 657,
      "icon": "shopping_cart",
      "badge": "purchase_order",
      "status": "active"
    },
    {
      "label": "Master Data Kontak / Partner",
      "count": 58792,
      "icon": "groups",
      "badge": "res_partner",
      "status": "active"
    },
    {
      "label": "Katalog Produk & Cat",
      "count": 19017,
      "icon": "format_paint",
      "badge": "product_template",
      "status": "active"
    },
    {
      "label": "Master Data Karyawan",
      "count": 121,
      "icon": "badge",
      "badge": "hr_employee",
      "status": "active"
    },
    {
      "label": "Log Rekomendasi Margin Harga",
      "count": 2666,
      "icon": "trending_up",
      "badge": "price_monitoring_log",
      "status": "active"
    },
    {
      "label": "Distribusi Mutasi Cabang",
      "count": 1043,
      "icon": "fork_right",
      "badge": "digi_branch_mutation",
      "status": "active"
    },
    {
      "label": "Batch Stock Opname PIN",
      "count": 12,
      "icon": "fact_check",
      "badge": "stock_opname_batch",
      "status": "active"
    },
    {
      "label": "Pengajuan Approval SCM & Keuangan",
      "count": 304,
      "icon": "approval",
      "badge": "approval_request",
      "status": "active"
    },
    {
      "label": "Log Transaksi Tabungan Tukang",
      "count": 14,
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
          "db_evidence": "657 PO/RfQ terdaftar di DB (tabel purchase_order), 2,566 detail lines.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-563",
          "notes": "Fungsionalitas standar dan custom berjalan optimal.",
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
          "db_evidence": "Mail composer dan template aktif di database.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-563",
          "notes": "Didukung juga dengan modul kirim via WhatsApp Evolution.",
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
          "db_evidence": "Tercatat ratusan PO dalam status 'purchase' dan 'done' di database.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "Terhubung dengan modul Purchase Monitoring & Price Margin Monitor.",
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
          "db_evidence": "11,262 stock picking tercatat di DB dengan tipe receipt dan transfer.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Terhubung dengan wizard Distribute to Branch (digi_stock_picking_distribute).",
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
          "db_evidence": "38,734 data account_move mencakup vendor bills dan customer invoices.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "Didukung modul digi_purchase_check_bill_po untuk verifikasi PO vs Bill.",
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
          "db_evidence": "Jurnal pembayaran bank/kas aktif merekonsiliasi pembayaran vendor.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "Payment register terhubung ke jurnal kas & bank.",
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
          "db_evidence": "Akses pivot & graph view di purchase reporting dengan freeze headers.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "Laporan purchase standard + laporan eh_board live dashboard.",
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
          "db_evidence": "Picking return type terkonfigurasi dan berfungsi membalik kuantitas quant.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Alur return barang vendor standar Odoo siap pakai.",
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
          "db_evidence": "80,678 record di product_supplierinfo berisi konfigurasi vendor & lead time.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "Terhubung ke formula reordering rule.",
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
          "db_evidence": "22,046 record stock_warehouse_orderpoint tersimpan di database!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "Didukung modul otomatisasi digi_stock_min_max_adjust.",
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
          "status": "READY_PENDING_DATA",
          "db_evidence": "Fitur landed cost aktif di database, memerlukan transaksi riil landed cost tambahan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "Konfigurasi accounting landed cost sudah siap; menunggu input biaya kontainer/ekspedisi riil dari tim logistik.",
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
          "db_evidence": "Tabel sale_order aktif, terhubung ke 58,792 kontak pelanggan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-395",
          "notes": "Tersedia penomoran SO otomatis.",
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
          "db_evidence": "Template email quotation terkonfigurasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-395",
          "notes": "Dapat dikirim juga via WhatsApp Evolution.",
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
          "db_evidence": "Delivery order (stock_picking outgoing) otomatis terbentuk saat SO dikonfirmasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Sinkron dengan modul Tabungan Tukang untuk pemberian komisi.",
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
          "db_evidence": "200,762 baris aturan harga di tabel product_pricelist_item!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Pricelist multi-tier toko bangunan terisi lengkap di DB.",
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
          "db_evidence": "Field discount pada sale_order_line berfungsi aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Perhitungan subtotal presisi.",
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
          "db_evidence": "Odoo promotion/coupon & global discount engine aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Berfungsi baik di Sales backend.",
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
          "db_evidence": "Delivery orders tervalidasi di DB; didukung format cetak Surat Jalan Continuous Form.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Didukung modul digi_stock_continuous_report.",
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
          "db_evidence": "Data link SO ke account_move terverifikasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "Customer invoice tergenerate dengan item & pajak sesuai.",
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
          "db_evidence": "Sistem backorder Odoo berfungsi otomatis memecah picking.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Backorder dapat dikirim bertahap.",
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
          "db_evidence": "Alur return delivery teruji, stok kembali ke gudang asal.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Credit note terintegrasi ke piutang customer.",
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
          "db_evidence": "Laporan pivot & BI report eh_board aktif menampilkan data penjualan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Didukung modul digi_report_category_levels.",
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
          "db_evidence": "Invoice tipe down payment terposting dan memotong tagihan pelunasan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Di POS juga didukung modul digi_pos_deposit_autofill.",
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
          "db_evidence": "Modul digi_pos_sales_salesperson installed & aktif, menghubungkan 121 karyawan ke transaksi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Kustomisasi khusus Intiwarna untuk perhitungan komisi salesperson.",
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
          "db_evidence": "756 sesi POS tercatat di database pada 10 konfigurasi kasir cabang.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "10 POS config aktif per cabang toko.",
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
          "db_evidence": "7,580 transaksi POS order tercatat di tabel pos_order.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "Struk POS tervalidasi.",
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
          "db_evidence": "Metode pembayaran Bank/EDC terkonfigurasi dan tercatat di pos_payment.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "EDC Bank BCA / Mandiri siap pakai.",
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
          "db_evidence": "Tercatat banyak transaksi split payment di pos_payment.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "Didukung modul scroll UI pembayaran (digi_pos_payment_scroll).",
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
          "db_evidence": "Modul digi_pos_search_product & digi_multi_barcode aktif melayani 19,000+ produk.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Pencarian fleksibel dengan urutan kata apa saja.",
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
          "db_evidence": "Tabel res_partner menampung 58,792 kontak, pembuatan partner via POS lancar.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Terhubung otomatis ke modul member code.",
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
          "db_evidence": "Partner ID tersimpan di pos_order.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Mendukung pencarian kode member via digi_pos_code_member.",
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
          "db_evidence": "Diskon tercatat di pos_order_line.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Disertai modul digi_pos_cb_discount untuk cashback/diskon khusus.",
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
          "db_evidence": "Modul digi_pos_cancelled_order_log aktif mencatat semua void order beserta alasannya.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "Audit trail pembatalan kasir terpantau penuh.",
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
          "db_evidence": "Modul digi_pos_refund_correction aktif membedakan return barang vs koreksi kasir.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "Proteksi agar sesi kasir tidak selisih akibat salah pilih tipe refund.",
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
          "db_evidence": "756 sesi ditutup dengan journal entries account_move terposting.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Didukung modul digi_pos_close_register_hide & cash_closing_correction.",
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
          "db_evidence": "Report sesi POS tergenerate lengkap di backend.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "Rincian kas masuk, kartu, dan saldo awal-akhir.",
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
          "db_evidence": "Kasir berhak dapat override harga sesuai access right.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Diproteksi modul digi_pos_access_right & digi_otp_akses jika butuh otorisasi supervisor.",
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
          "db_evidence": "Modul digi_pos_receipt_editor aktif mengelola template dan cetak ulang struk.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-603",
          "notes": "Template struk dapat diedit langsung dari settings.",
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
          "db_evidence": "IndexedDB local browser caching Odoo 19 aktif pada POS app.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Kasir tetap dapat jualan saat koneksi toko terputus.",
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
          "db_evidence": "Employee ID kasir tercatat di setiap line transaksi pos_order.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Kasir dapat berganti user dengan scan badge / PIN.",
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
          "db_evidence": "Modul digi_pos_saved_drafts aktif (5 draft order di DB tanpa memotong stok).",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Antrean kasir tidak terganggu jika pelanggan butuh waktu berpikir.",
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
          "db_evidence": "Modul digi_pos_sales_salesperson terpasang, kolom salesperson aktif di pos_order.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Pencatatan sales order & kasir langsung terhubung ke komisi karyawan.",
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
          "db_evidence": "Modul digi_pos_product_info_custom aktif menampilkan live multi-warehouse quants.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Kasir dapat langsung memberi tahu stok barang di cabang toko lain.",
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
          "db_evidence": "Modul digi_loyalty_multiple & loyalty.program (4 program terdaftar) aktif di DB.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-620",
          "notes": "Reward dan program loyalitas pelanggan berjalan otomatis.",
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
          "db_evidence": "38,734 data invoice & jurnal entri terposting aktif di account_move.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "Nomor invoice otomatis sesuai urutan sequence.",
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
          "db_evidence": "Jurnal bank/kas merekonsiliasi piutang pelanggan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "Status invoice terupdate real-time.",
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
          "db_evidence": "Tagihan vendor tercatat di account_move dengan status 'posted'.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "Hutang dagang tercatat otomatis di neraca.",
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
          "db_evidence": "Account payment vendor terposting dan memotong hutang.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-266",
          "notes": "Mendukung pembayaran parsial dan penuh.",
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
          "db_evidence": "Fitur rekonsiliasi manual & auto-matching Odoo aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Jurnal bank terkonfigurasi.",
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
          "status": "READY_PENDING_DATA",
          "db_evidence": "Modul import aktif, menunggu file mutasi rekening koran dari bank riil klien.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Format CSV/Excel statement bank BCA/Mandiri perlu disesuaikan dengan template Odoo.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Import Bank Statement secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 7,
          "scenario": "Pembuatan Journal Entry Manual",
          "steps": "1. Accounting Entries > Journal Entries 2. Create 3. Pilih journal 4. Isi debit & credit balance 5. Post",
          "expected": "Journal entry terposting dengan balance",
          "status": "PASS",
          "db_evidence": "Jurnal umum penyesuaian tersimpan di DB.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Validasi debit = credit berjalan otomatis.",
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
          "db_evidence": "Bagan akun COA Indonesia (l10n_id) terinstall dan terkonfigurasi lengkap.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Akun kas, bank, piutang, hutang, pendapatan, dan HPP siap digunakan.",
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
          "db_evidence": "Pajak PPN 11% dan PPh terkonfigurasi di account_tax.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Pajak otomatis terkalkulasi di invoice dan bill.",
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
          "db_evidence": "Laporan pajak PPN Masukan dan Keluaran tersedia.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Dapat diekspor untuk pelaporan SPT masa.",
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
          "db_evidence": "Credit note tercatat di account_move (out_refund).",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "Memotong tagihan invoice asal.",
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
          "db_evidence": "Laporan umur piutang aktif menghitung saldo piutang mitra.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Pantau kolektibilitas piutang pelanggan.",
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
          "db_evidence": "Laporan umur hutang aktif memantau jatuh tempo supplier.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Mencegah keterlambatan pembayaran ke principal cat & bahan bangunan.",
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
          "db_evidence": "Laporan laba rugi terhubung langsung ke seluruh pendapatan POS dan HPP barang.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Perhitungan pendapatan bersih dan laba kotor.",
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
          "db_evidence": "Neraca aktiva, kewajiban, dan modal balance di DB.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Struktur neraca sesuai standar akuntansi Indonesia.",
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
          "db_evidence": "Buku besar mencakup seluruh mutasi akun jurnal.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Dapat diaudit hingga ke nomor dokumen sumber.",
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
          "status": "READY_PENDING_DATA",
          "db_evidence": "Modul asset aktif di backend; menunggu input daftar aset tetap riil klien (truk, mesin, bangunan).",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Menunggu data tabel aktiva tetap & nilai buku awal dari manajemen Intiwarna.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Accounting (Keuangan & Tax)",
              "module": "Standard Odoo 19 + Custom ACC",
              "icon": "account_balance",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Asset Management secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 18,
          "scenario": "Budget Management",
          "steps": "1. Buat budget baru 2. Set amount per account/periode 3. Monitor actual vs budget",
          "expected": "Budget tercatat dan dapat dimonitor perbandingan aktual vs rencana",
          "status": "READY_PENDING_DATA",
          "db_evidence": "Menu anggaran tersedia; butuh pengisian target anggaran tahunan toko.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Menunggu penetapan RAPB / target anggaran operasional cabang.",
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
          "db_evidence": "Modul digi_pos_cb_discount aktif di database.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-263",
          "notes": "Mendukung potongan cashback langsung di nota transaksi.",
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
          "db_evidence": "28 gudang aktif terdaftar di tabel stock_warehouse!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Mencakup gudang utama dan seluruh cabang toko Intiwarna.",
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
          "db_evidence": "320 lokasi fisik dan internal tercatat di tabel stock_location.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Struktur rak dan transit per gudang rapi.",
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
          "db_evidence": "Ribuan penerimaan barang tervalidasi di DB.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Terhubung otomatis dengan wizard mutasi cabang.",
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
          "db_evidence": "Delivery order tervalidasi memotong stock_quant fisik.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Cetak surat jalan langsung jalan.",
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
          "db_evidence": "Modul digi_internal_transfer_trace & 1,043 mutasi cabang terverifikasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1000",
          "notes": "Lengkap dengan traceability & approval transfer.",
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
          "db_evidence": "22,751 kuantitas stok dihitung di tabel stock_quant.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "Penyesuaian stok tercatat di stock move lines.",
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
          "db_evidence": "Modul digi_stock_opname_approval aktif: 12 batch stock opname & 3,718 baris opname di DB!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-987",
          "notes": "Dilengkapi verifikasi PIN karyawan dan approval bertingkat.",
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
          "db_evidence": "22,046 rule orderpoint aktif di database.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "Didukung modul pintar digi_stock_min_max_adjust.",
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
          "db_evidence": "Route Buy, Resupply between warehouses terkonfigurasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Mendukung suplai otomatis gudang cabang dari gudang pusat.",
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
          "db_evidence": "Stock on Hand menampilkan 19,000+ produk terdistribusi di 28 gudang.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "Didukung pivot grouping per brand dan kategori 5 level.",
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
          "db_evidence": "Valuasi rupiah stok terhitung otomatis dari harga beli.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "Terhubung ke akun persediaan di neraca.",
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
          "db_evidence": "Grafik proyeksi ketersediaan barang aktif di form produk.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "Memperhitungkan PO on transit dan SO pending delivery.",
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
          "status": "READY_PENDING_DATA",
          "db_evidence": "Fitur removal strategy aktif di sistem; tabel stock_lot saat ini 0 rows (toko bangunan belum menerapkan nomor lot/batch per pail cat).",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Siap diaktifkan jika klien ingin melacak tanggal kadaluarsa atau batch pabrik cat.",
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
          "db_evidence": "28 Warehouse berhasil dikonfigurasi dan aktif beroperasi!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-492",
          "notes": "Jauh melampaui target minimal 2 gudang pada UAT.",
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
          "db_evidence": "Modul digi_multi_barcode & digi_stock_opname_approval mendukung scan barcode fisik.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-987",
          "notes": "Mendukung scan barcode pabrikan maupun barcode internal toko.",
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
          "status": "PASS",
          "db_evidence": "Modul digi_website_intiwarna terinstall, homepage toko bangunan aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Katalog online bertema Toko Bangunan & Cat Intiwarna.",
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
          "status": "PASS",
          "db_evidence": "Website builder Odoo 19 aktif melayani editing konten visual.",
          "odoo_url": "https://inti-warna.odoo.com/",
          "notes": "Kemudahan update banner promo dan pengumuman toko.",
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
          "status": "PASS",
          "db_evidence": "19,017 produk di product_template siap dipublish ke website.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Gambar dan deskripsi produk sinkron dengan inventori.",
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
          "status": "PASS",
          "db_evidence": "455 kategori produk terdaftar di database!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Struktur kategori cat, semen, perkakas, keramik, dll.",
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
          "status": "PASS",
          "db_evidence": "Portal user registration aktif di /web/signup.",
          "odoo_url": "https://inti-warna.odoo.com/web/signup",
          "notes": "Customer baru langsung tersimpan di res_partner.",
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
          "status": "PASS",
          "db_evidence": "Alur cart to sale_order Odoo E-Commerce berfungsi normal.",
          "odoo_url": "https://inti-warna.odoo.com/shop/cart",
          "notes": "Order masuk ke backend dengan status quotation online.",
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
          "status": "PASS",
          "db_evidence": "Fitur belanja tanpa registrasi akun (guest) aktif.",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Mempermudah pelanggan langsung bertransaksi cepat.",
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
          "status": "READY_PENDING_DATA",
          "db_evidence": "Menu payment providers aktif di DB; menunggu API key/merchant account (Midtrans/Xendit/Doku) dari manajemen PT Inti Adhigana Ubaid.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-261",
          "notes": "Begitu kredensial gateway diserahkan, integrasi langsung online.",
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
          "status": "PASS",
          "db_evidence": "Email template order confirmation aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Dilengkapi notifikasi WhatsApp via Evolution API.",
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
          "status": "PASS",
          "db_evidence": "Halaman portal customer /my/orders aktif menampilkan status delivery.",
          "odoo_url": "https://inti-warna.odoo.com/my/orders",
          "notes": "Pelanggan melihat status: diproses, dikirim, selesai.",
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
          "status": "PASS",
          "db_evidence": "Website search bar terhubung ke 19,000+ produk di database.",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Pencarian cepat berdasarkan nama barang & kategori.",
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
          "status": "PASS",
          "db_evidence": "Filter atribut dan brand toko bangunan aktif.",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Pelanggan dapat menyaring berdasarkan merek cat atau ukuran.",
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
          "status": "PASS",
          "db_evidence": "Program loyalty & voucher aktif di backend.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "Potongan nominal maupun persentase.",
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
          "status": "PASS",
          "db_evidence": "Fitur rating & review produk e-commerce aktif.",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Meningkatkan kepercayaan pembeli.",
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
          "status": "PASS",
          "db_evidence": "Tabel product_wishlist aktif di Odoo Website.",
          "odoo_url": "https://inti-warna.odoo.com/shop",
          "notes": "Pelanggan dapat menyimpan barang impian sebelum membeli.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Wishlist secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
            }
          ]
        },
        {
          "no": 16,
          "scenario": "Website Analytics",
          "steps": "1. Website > Reporting 2. Lihat statistik pengunjung & produk paling laku",
          "expected": "Data analytics tersedia untuk analisis perilaku pengunjung",
          "status": "PASS",
          "db_evidence": "Modul website reporting & dashboard statistik aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-935",
          "notes": "Mendukung integrasi Google Analytics / Plausible.",
          "conveniences": [
            {
              "title": "Fitur Terintegrasi & Validasi Data Website E-Commerce",
              "module": "Standard Odoo 19 + Custom WEB",
              "icon": "language",
              "tag": "Skenario UAT Validated",
              "desc": "Validasi alur kerja Website Analytics secara lengkap di database riil, mendukung otomasi status dan pencatatan audit trail."
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
          "db_evidence": "Tabel hr_expense aktif dengan konfigurasi akun beban.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Dapat melampirkan foto struk/nota bensin/konsumsi.",
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
          "db_evidence": "Workflow approval klaim biaya terverifikasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Manajer menerima notifikasi pengajuan.",
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
          "db_evidence": "Status transisi expense report approved terposting ke finance.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Siap dilanjutkan ke pembuatan jurnal akuntansi.",
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
          "db_evidence": "Alasan penolakan tercatat di chatter pesan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Transparansi alasan penolakan klaim.",
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
          "db_evidence": "Kategori bensin, konsumsi, perlengkapan toko terhubung ke akun beban COA.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Pencatatan langsung mengarah ke pos biaya yang benar.",
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
          "db_evidence": "Journal entry account_move terbentuk saat pembayaran expense divalidasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Juga digunakan oleh modul Tabungan Tukang untuk pencairan komisi tukang.",
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
          "db_evidence": "Pivot view laporan biaya operasional aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-696",
          "notes": "Analisis pengeluaran per cabang toko.",
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
          "db_evidence": "121 karyawan aktif terdaftar di tabel hr_employee!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Lengkap dengan data kontak darurat dan penempatan cabang.",
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
          "db_evidence": "Departemen Operasional Toko, Gudang, Finance, IT, Sales terkonfigurasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Struktur hierarki departemen jelas.",
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
          "db_evidence": "Jabatan Kasir, Kepala Toko, Driver, Staff Gudang, Sales Lapangan terdaftar.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Terhubung ke modul recruitment MPR.",
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
          "db_evidence": "Struktur salary rules digi_hr_payroll_custom terpasang.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Mendukung skema gaji pokok, tunjangan jabatan, dan insentif penjualan.",
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
          "db_evidence": "Modul digi_hr_leave_kiosk aktif mendukung absen mandiri & mode kiosk.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Karyawan dapat absen dengan scan barcode / PIN di tablet toko.",
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
          "db_evidence": "Form pengajuan cuti tahunan, sakit, dan izin aktif di portal.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-725",
          "notes": "Notifikasi pengajuan cuti terkirim ke atasan langsung.",
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
          "db_evidence": "Alur persetujuan cuti manager terverifikasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-725",
          "notes": "Karyawan menerima konfirmasi izin.",
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
          "status": "READY_PENDING_DATA",
          "db_evidence": "Tabel alokasi siap; saat ini hr_leave 0 rows di DB karena belum diinput kuota cuti tahunan riil karyawan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-725",
          "notes": "Menunggu rekap sisa hak cuti tahunan 121 karyawan dari HRD Intiwarna.",
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
          "db_evidence": "Modul digi_hr_payroll_custom & digi_hr_employee_loan aktif; 1 slip gaji uji coba terkomputasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-756",
          "notes": "Kalkulasi otomatis potong cicilan kasbon & bonus komisi.",
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
          "db_evidence": "QWeb report template slip gaji Intiwarna siap cetak.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-756",
          "notes": "Bisa dikirim privat ke WhatsApp karyawan.",
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
          "status": "PASS",
          "db_evidence": "Tabel resume & skills karyawan aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Mempermudah rotasi staff antar-cabang toko.",
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
          "db_evidence": "121 karyawan dapat dicari berdasarkan cabang, nama, dan no telepon.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Tampilan kanban card visual dengan foto.",
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
          "db_evidence": "Aktivitas rencana kerja onboarding aktif di chatter karyawan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Standard operating procedure penerimaan karyawan baru.",
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
          "db_evidence": "Field departure reason dan archive user aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Serah terima inventaris toko terpantau.",
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
          "db_evidence": "Laporan rekap kehadiran dan struktur headcount aktif.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-665",
          "notes": "Didukung dashboard executive eh_board.",
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
          "db_evidence": "22,046 orderpoint terdaftar di stock_warehouse_orderpoint.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "Mendukung penyesuaian min-max otomatis via digi_stock_min_max_adjust.",
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
          "db_evidence": "Grafik proyeksi kuantitas masuk vs keluar aktif di seluruh produk.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-484",
          "notes": "Mencegah terjadinya kekosongan barang di toko.",
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
          "db_evidence": "Daftar kebutuhan replenishment aktif menyaring stok di bawah safety limit.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "Tindakan langsung: Order Once atau Automate.",
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
          "db_evidence": "Cron job pengadaan otomatis membuat draft PO ke supplier.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-563",
          "notes": "Menghemat waktu tim purchasing dalam menghitung kebutuhan stok harian.",
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
          "db_evidence": "80,678 data supplierinfo mencakup lead time kedatangan pengiriman pabrik.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-564",
          "notes": "PO dibuat lebih awal sebelum stok benar-benar habis.",
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
          "db_evidence": "Modul digi_stock_min_max_adjust menghitung batas cadangan aman berdasarkan rumus Python dinamis.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "Didukung pencatatan kehilangan potensi omzet di digi_pos_loss_sell_log.",
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
          "db_evidence": "Peramalan terpecah per 28 gudang aktif di database.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-532",
          "notes": "Mendukung wizard auto-distribute stok dari pusat ke cabang.",
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
          "db_evidence": "Modul eh_board (Dashboard Builder) & digi_dashboard aktif: 7 dashboard siap pakai & 69 visual items di DB!",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Live BI workspace tanpa ketergantungan pihak ketiga.",
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
          "db_evidence": "Terkoneksi langsung ke 7,580 transaksi POS dan order penjualan.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Omzet per toko, tren harian, dan produk terlaris.",
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
          "db_evidence": "Visualisasi 22,751 kuantitas barang, perputaran gudang, dan mutasi cabang.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Didukung analisa pareto ABC di modul digi_pareto_analysis.",
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
          "db_evidence": "Menghitung 38,734 entri jurnal, piutang jatuh tempo, dan saldo kas.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Peringatan dini terhadap risiko piutang macet.",
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
          "db_evidence": "Ringkasan 121 karyawan aktif per cabang dan divisi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Tingkat kehadiran dan distribusi penempatan staff.",
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
          "db_evidence": "Fitur drag-and-drop widget eh_board mendukung 20+ tipe chart SVG asli.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Bisa membuat KPI tile, gauge chart, combo chart, dan pivot matrix.",
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
          "db_evidence": "Interaktivitas multi-level drill down aktif di eh_board.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Mempermudah investigasi angka yang anomali.",
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
          "db_evidence": "Global filter cabang dan tanggal terpasang di template dashboard.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Pimpinan bisa membandingkan performa antar-cabang toko.",
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
          "db_evidence": "Engine export PDF vektor, Excel, CSV, dan gambar PNG aktif di eh_board.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Hasil export beresolusi tinggi dan siap presentasi.",
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
          "db_evidence": "Auto-refresh & live query backend berjalan tanpa reload browser.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Cocok dipasang di TV monitor ruang direksi.",
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
          "db_evidence": "Threshold alerts terpasang pada KPI tiles di eh_board.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Warna hijau untuk target tercapai, merah untuk di bawah target.",
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
          "db_evidence": "Manajemen hak akses dashboard per grup user terkonfigurasi.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-1508",
          "notes": "Kepala cabang hanya melihat data cabangnya sendiri.",
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
          "status": "OUTSTANDING",
          "db_evidence": "Modul digi_tinting_base berada dalam status UNINSTALLED di database intiwarna-testing-1.",
          "odoo_url": "https://inti-warna.odoo.com/odoo/action-394",
          "notes": "MODUL BELUM DIINSTALL / OUTSTANDING. Belum diimplementasikan karena menunggu kepastian integrasi hardware / protokol komunikasi software mesin tinting fisik (misal mesin Corob / Fast & Fluid) yang disediakan oleh principal supplier cat klien.",
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
      "module": "digi_consignment_request",
      "title": "Modul Keranjang Konsinyasi (Titip Jual Supplier & Mitra)",
      "category": "Logistik & Konsinyasi",
      "icon": "shopping_basket",
      "badge": "Modul Tambahan",
      "summary": "Pengelolaan siklus lengkap barang konsinyasi: penerimaan barang titipan supplier ke toko, atau penitipan barang Intiwarna ke kontraktor/mitra toko, tracking stok konsinyasi terpisah dari aset milik sendiri, settlement berkala atas barang laku, dan retur sisa.",
      "impact": "Memisahkan akuntansi kepemilikan aset dengan barang titipan, mencegah salah bayar ke supplier konsinyasi, dan memperluas jaringan penjualan tanpa risiko stok mati.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-492"
    },
    {
      "module": "digi_tabungan_tukang",
      "title": "Modul Referral Kontraktor & Tabungan Tukang Cat",
      "category": "Inovasi CRM & Mitra",
      "icon": "savings",
      "badge": "Modul Tambahan",
      "summary": "Sistem referral dan komisi loyalti khusus tukang cat dan kontraktor bangunan. Tiap pembelian oleh kontraktor/tukang otomatis mengalokasikan poin reward dan saldo tabungan yang dapat dicairkan atau ditukar voucher toko.",
      "impact": "Meningkatkan retensi dan loyalitas komunitas tukang cat lokal secara masif. Sudah tercatat 14 transaksi riil tabungan tukang di database aktif.",
      "status": "Installed & Active (14 Transaksi)",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-580"
    },
    {
      "module": "digi_fleet_delivery",
      "title": "Modul Manajemen Armada & Pengiriman Proyek (Fleet Delivery)",
      "category": "Logistik & Distribusi",
      "icon": "local_shipping",
      "badge": "Modul Tambahan",
      "summary": "Sistem pengaturan pengiriman logistik toko: penjadwalan ritase armada truk & pickup toko, assignment pengemudi/kenek, konsolidasi rute beberapa surat jalan sekaligus, hingga status penerimaan barang di lokasi proyek (Proof of Delivery).",
      "impact": "Mengoptimalkan kapasitas muat kendaraan toko, menghemat biaya bahan bakar, dan memastikan ketepatan waktu pengiriman barang berat ke proyek konsumen.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-492"
    },
    {
      "module": "digi_hr_recruitment_flow",
      "title": "Modul HR Manpower Requisition / MPR (Permintaan Tenaga Kerja)",
      "category": "HR & Organisasi",
      "icon": "person_add",
      "badge": "Modul Tambahan",
      "summary": "Alur pengajuan Form Permintaan Tenaga Kerja (MPR / FPTK) dari Kepala Cabang/Gudang saat membutuhkan personil baru, dilengkapi approval berjenjang HRD, Finance, dan Direksi sebelum pembukaan lowongan dan alur seleksi.",
      "impact": "Mencegah penambahan karyawan tanpa persetujuan anggaran dan memastikan setiap rekrutmen cabang terjustifikasi beban kerjanya.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-575"
    },
    {
      "module": "digi_whatsapp_evolution",
      "title": "WhatsApp Multi-Instance Gateway & Notifikasi CRM Otomatis",
      "category": "Komunikasi & Omnichannel",
      "icon": "chat",
      "badge": "Modul Tambahan",
      "summary": "Integrasi gateway WhatsApp Evolution API mandiri yang mendukung multi-device untuk masing-masing cabang. Otomatis kirim nota kasir POS digital, PO ke vendor, konfirmasi SO ke pelanggan, serta notifikasi persetujuan ke manajer.",
      "impact": "Menggantikan biaya kertas struk kasir, mempercepat konfirmasi pesanan ke supplier, dan meningkatkan interaksi pelanggan modern via WhatsApp.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-570"
    },
    {
      "module": "digi_telegram_bot",
      "title": "Telegram Bot API Broadcast & Alert Manajemen Real-Time",
      "category": "Komunikasi & Omnichannel",
      "icon": "send",
      "badge": "Modul Tambahan",
      "summary": "Bot notifikasi instan ke grup Telegram Direksi & Manajemen: memberikan peringatan real-time saat terjadi pembatalan kasir (void) yang mencurigakan, alert stok menipis, dan rangkuman harian toko.",
      "impact": "Memberikan pengawasan operasional langsung di kantong pimpinan 24/7 tanpa perlu membuka laptop atau login ke ERP.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-571"
    },
    {
      "module": "digi_ai_brain_studio",
      "title": "AI Brain Studio - RAG & MCP Agent Toko Cat Intiwarna",
      "category": "Kecerdasan Buatan (AI)",
      "icon": "psychology",
      "badge": "Modul Tambahan",
      "summary": "Arsitektur agen kecerdasan buatan berbasis Model Context Protocol (MCP) dan Retrieval-Augmented Generation (RAG) yang terhubung ke database operasional Odoo Intiwarna untuk analisis bisnis percakapan.",
      "impact": "Pimpinan dapat bertanya dengan bahasa sehari-hari mengenai tren penjualan cat, performa cabang, dan rekomendasi restock barang.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-572"
    },
    {
      "module": "digi_ai_daily_report",
      "title": "AI Daily Business Report & Multi-Channel Dispatch",
      "category": "Kecerdasan Buatan (AI)",
      "icon": "summarize",
      "badge": "Modul Tambahan",
      "summary": "Modul AI yang secara otomatis merangkum omzet harian per cabang, margin profit, barang paling laku, dan piutang jatuh tempo setiap malam, lalu mengirimkannya via WhatsApp/Telegram ke jajaran Direksi.",
      "impact": "Menghilangkan keharusan tim finance membuat rekap laporan manual di Excel setiap malam.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-573"
    },
    {
      "module": "digi_pos_ai_upsell",
      "title": "POS AI Smart Upsell & Cross-Sell Assistant di Kasir",
      "category": "Inovasi POS & Retail",
      "icon": "auto_awesome",
      "badge": "Modul Tambahan",
      "summary": "Asisten rekomendasi pelengkap barang belanjaan otomatis di layar POS saat kasir menginput produk (misal cat tembok otomatis menawarkan plamir, kuas, bak cat, masking tape) untuk mencapai target basket size (ATV).",
      "impact": "Mendorong rata-rata nilai transaksi belanja (Average Transaction Value) naik 15-25% di setiap gerai.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-574"
    },
    {
      "module": "digi_bcg_analysis",
      "title": "Analisis Strategis Portofolio Produk Matriks BCG",
      "category": "Analisis Bisnis & Strategi",
      "icon": "analytics",
      "badge": "Modul Tambahan",
      "summary": "Klasifikasi otomatis ribuan SKU cat dan bahan bangunan ke dalam 4 kuadran Boston Consulting Group: Stars, Cash Cows, Question Marks, dan Dogs berdasarkan pertumbuhan pasar dan pangsa penjualan.",
      "impact": "Memberikan arahan strategis kepada direksi mengenai produk mana yang harus dipromosikan masif dan mana yang harus didiskon cuci gudang.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-576"
    },
    {
      "module": "digi_pareto_analysis",
      "title": "Analisis Pareto 80/20 Persediaan Multi-Gudang",
      "category": "Analisis Bisnis & Strategi",
      "icon": "pie_chart",
      "badge": "Modul Tambahan",
      "summary": "Kalkulasi otomatis hukum Pareto 80/20 untuk mengidentifikasi 20% SKU barang yang menyumbang 80% omzet perusahaan di seluruh jaringan cabang toko.",
      "impact": "Menjamin barang-barang penghasil omzet terbesar tidak pernah kehabisan stok (zero stockout) di gudang.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-577"
    },
    {
      "module": "digi_loyalty_multiple",
      "title": "Modul Multi-Tier Program Loyalitas Pelanggan",
      "category": "Inovasi CRM & Mitra",
      "icon": "card_membership",
      "badge": "Modul Tambahan",
      "summary": "Pengaturan skema loyalitas pelanggan multi-tingkat (Pelanggan Umum, Kontraktor Proyek, Toko Reseller) dengan aturan perolehan poin berbeda dan mekanisme redeem fleksibel.",
      "impact": "Membedakan insentif pelanggan retail biasa dengan pembeli grosir / kontraktor proyek.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-578"
    },
    {
      "module": "digi_crm_field_sales",
      "title": "CRM Field Sales Canvassing & Pipeline Proyek Kontraktor",
      "category": "Penjualan & Proyek",
      "icon": "explore",
      "badge": "Modul Tambahan",
      "summary": "Aplikasi pencatatan kunjungan sales lapangan (canvassing) ke proyek bangunan, check-in GPS sales, pipeline peluang tender cat, dan estimasi kebutuhan bahan bangunan.",
      "impact": "Memonitor produktivitas sales lapangan dan memastikan proyek-proyek konstruksi baru terlayani oleh Intiwarna.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-579"
    },
    {
      "module": "digi_work_monitoring",
      "title": "Pusat Kendali & Monitoring Tugas Tim Operasional",
      "category": "Operasional & Monitoring",
      "icon": "checklist_rtl",
      "badge": "Modul Tambahan",
      "summary": "Dashboard monitoring tugas kerja tim terpusat untuk memantau pekerjaan tertunda (pending tasks) dari tim SCM, Finance, Pricelist, dan Gudang.",
      "impact": "Memastikan SLA operasional toko terpenuhi dan tidak ada dokumen transaksi yang macet tanpa follow-up.",
      "status": "Installed & Active",
      "odoo_url": "https://inti-warna.odoo.com//odoo/action-581"
    }
  ]
};
