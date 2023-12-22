using Xunit;

namespace DeveloperSample.Algorithms
{
    public class AlgorithmTest
    {
        [Fact]
        public void CanGetFactorial()
        {
            Assert.Equal(120, Algorithms.GetFactorial(5));
        }

        [Fact]
        public void CanFormatSeparators()
        {
            Assert.Equal("a,b and c", Algorithms.FormatSeparators("a", "b", "c"));
        }
    }
}