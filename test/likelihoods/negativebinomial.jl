@testset "NegativeBinomialLikelihood" begin
    lik = NegativeBinomialLikelihood()
    test_interface(lik, SqExponentialKernel(), rand(10))
end