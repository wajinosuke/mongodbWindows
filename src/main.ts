import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tutrial');

// スキーマを定義
const testSchema = new mongoose.Schema({
    Moji: String,
    Suji: Number
})

// モデルを定義
const Test = mongoose.model('Test', testSchema);

// ドキュメント作成

const testDoc = new Test({
    Moji: 'moji',
    Suji: 'moji'
})

testDoc.save().then((doc) => {
    console.log(doc);
});
