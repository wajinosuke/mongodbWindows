import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tutrial');

// スキーマを定義
const testSchema = new mongoose.Schema({
    Moji: String,
    Suji: Number
})

// インターフェースを定義
interface ITestInterface extends mongoose.Document {
    Moji: string;
    Suji: number;
}

// モデルを定義
const Test = mongoose.model<ITestInterface>('Test', testSchema);

// ドキュメント作成

const testDoc = new Test({
    Moji: 'moji',
    Suji: 3
})

const main = async () => {
    try {
    const doc = await testDoc.save();
        console.log(doc);
    } catch (e) {
        console.log(e);
    }
}