"""
    NegativeBinomialLikelihood(r::Real=1.0, l::AbstractLink=ExpLink())

Negative binomial likelihood with number of successes defined as `r` and the probability of success in an individual trial defined as `p`.

```math
    p(y|p) = NegativeBinomial(y | r, l(p))
```

On calling, this would return a negative binomial distribution with number of successes `r` and probability of success `l(p)`.
"""
struct NegativeBinomialLikelihood{T<:Real,Tl<:AbstractLink}
    r::T
    invlink::Tl
end

NegativeBinomialLikelihood() = NegativeBinomialLikelihood(1.0)

NegativeBinomialLikelihood(r::Real) = NegativeBinomialLikelihood(r, ExpLink())

@functor NegativeBinomialLikelihood

(l::NegativeBinomialLikelihood)(p::Real) = NegativeBinomial(l.r, l.invlink(p))

(l::NegativeBinomialLikelihood)(fs::AbstractVector{<:Real}) = Product(NegativeBinomial.(l.r, l.invlink.(fs)))
