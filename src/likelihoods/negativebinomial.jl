"""
    NegativeBinomialLikelihood(l::AbstractLink=ExpLink())

Negative binomial likelihood with number of successes defined as `r` and the probability of success in an individual trial defined as `p`.

```math
    p(y|p) = NegativeBinomial(y | r, l(p))
```

On calling, this would return a negative binomial distribution with number of successes `r` and probability of success `l(p)`.
"""
struct NegativeBinomialLikelihood{T<:Real,L<:AbstractLink}
    r::T
    invlink::L
end

NegativeBinomialLikelihood() = NegativeBinomialLikelihood(ExpLink())

(l::NegativeBinomialLikelihood)(p::Real) = Poisson(l.r, l.invlink(p))

(l::NegativeBinomialLikelihood)(fs::AbstractVector{<:Real}) = Product(NegativeBinomial.(l.r, l.invlink.(fs)))
