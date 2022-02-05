import AlgorithmSite from './algorithm-site.js'

const PROGRAMMERS_LINK = "https://programmers.co.kr/";

class Programmers extends AlgorithmSite {
    static canHandle(link) {
        return link.startsWith(PROGRAMMERS_LINK);
    }

    generateTestCode() {
        $("#content").append(
            `<textarea id="result" name="text" cols="80" rows="15" wrap="off">
import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import static org.assertj.core.api.Assertions.assertThat;

public class 도둑질 {
    public static Stream<Arguments> 도둑질() {
        return Stream.of(
                Arguments.arguments(
                        new int[]{1, 2, 3, 1}, 4
                ),
                Arguments.arguments(
                        new int[]{1, 2, 3, 4, 5}, 8
                ),
                Arguments.arguments(
                        new int[]{10, 2, 2, 100, 2 }, 110
                )
        );
    }

    @ParameterizedTest
    @MethodSource
    void 도둑질(int[] money, int answer) {
        assertThat(solution(money)).isEqualTo(answer);
    }

    public int solution(int[] money) {
        
    }
}
</textarea>`);
    }
}

export default Programmers;
