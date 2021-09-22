@testset "NegativeBinomialLikelihood" begin
    lik = NegativeBinomialLikelihood(2.0)
    test_interface(lik, SqExponentialKernel(), rand(10); functor_args=(:r, :invlink))
end