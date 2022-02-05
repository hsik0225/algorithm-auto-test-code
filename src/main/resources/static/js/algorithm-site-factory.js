import Programmers from './programmers.js'
import Baekjoon from './baekjoon.js'

export default function createTestCodeGenerator() {
    const link = $("#link").val();
    if (Baekjoon.canHandle(link)) {
        return new Baekjoon(link);
    }

    if (Programmers.canHandle(link)) {
        return new Programmers(link);
    }

    throw new Error("Input Illegal Link.");
}
