const { SlashCommandBuilder } = require("discord.js");

module.exports = [
  new SlashCommandBuilder()
    .setName("store")
    .setDescription("Lihat kategori produk"),
  new SlashCommandBuilder()
    .setName("list")
    .setDescription("Lihat list produk dalam kategori")
    .addStringOption(opt => opt.setName("kategori").setDescription("Nama kategori").setRequired(true)),
  new SlashCommandBuilder()
    .setName("detail")
    .setDescription("Lihat detail produk")
    .addIntegerOption(opt => opt.setName("id").setDescription("ID produk").setRequired(true)),
  new SlashCommandBuilder()
    .setName("additem")
    .setDescription("Tambah produk (Admin)")
    .addStringOption(opt => opt.setName("kategori").setDescription("Nama kategori").setRequired(true))
    .addStringOption(opt => opt.setName("nama").setDescription("Nama produk").setRequired(true))
    .addIntegerOption(opt => opt.setName("harga").setDescription("Harga").setRequired(true))
    .addStringOption(opt => opt.setName("deskripsi").setDescription("Deskripsi").setRequired(true)),
  new SlashCommandBuilder()
    .setName("order")
    .setDescription("Order produk")
    .addIntegerOption(opt => opt.setName("id").setDescription("ID produk").setRequired(true)),
  new SlashCommandBuilder()
    .setName("resetproduk")
    .setDescription("Reset semua produk (Admin)"),
  new SlashCommandBuilder()
    .setName("hapusproduk")
    .setDescription("Hapus produk (Admin)")
    .addStringOption(opt => opt.setName("kategori").setDescription("Nama kategori").setRequired(true))
    .addIntegerOption(opt => opt.setName("id").setDescription("ID produk"))
    .addStringOption(opt => opt.setName("nama").setDescription("Nama produk")),
  new SlashCommandBuilder()
    .setName("editproduk")
    .setDescription("Edit produk (Admin)")
    .addStringOption(opt => opt.setName("kategori").setDescription("Nama kategori").setRequired(true))
    .addIntegerOption(opt => opt.setName("id").setDescription("ID produk"))
    .addStringOption(opt => opt.setName("namalama").setDescription("Nama produk lama"))
    .addStringOption(opt => opt.setName("nama").setDescription("Nama baru"))
    .addIntegerOption(opt => opt.setName("harga").setDescription("Harga baru"))
    .addStringOption(opt => opt.setName("deskripsi").setDescription("Deskripsi baru")),
  new SlashCommandBuilder()
    .setName("addadmin")
    .setDescription("Tambah admin bot (Super Admin)")
    .addUserOption(opt => opt.setName("user").setDescription("User yang akan jadi admin").setRequired(true)),
  new SlashCommandBuilder()
    .setName("topup")
    .setDescription("Menu Topup"),
  new SlashCommandBuilder()
    .setName("say")
    .setDescription("Owner: Kirim pesan ke channel")
    .addStringOption(opt => opt.setName("pesan").setDescription("Isi pesan").setRequired(true)),
];
