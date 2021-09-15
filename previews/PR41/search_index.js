var documenterSearchIndex = {"docs":
[{"location":"#GPLikelihoods.jl","page":"Home","title":"GPLikelihoods.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [GPLikelihoods]","category":"page"},{"location":"#GPLikelihoods.AbstractLink","page":"Home","title":"GPLikelihoods.AbstractLink","text":"AbstractLink\n\nAbstract type defining maps from R^n -> X. They can be applied by calling link(x).\n\nA series of definitions are given in http://web.pdx.edu/~newsomj/mvclass/ho_link.pdf\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.BernoulliLikelihood","page":"Home","title":"GPLikelihoods.BernoulliLikelihood","text":"BernoulliLikelihood(l::AbstractLink=LogisticLink())\n\nBernoulli likelihood is to be used if we assume that the  uncertainity associated with the data follows a Bernoulli distribution. The link l needs to transform the input f to the domain [0, 1]\n\n    p(yf) = Bernoulli(y  l(f))\n\nOn calling, this would return a Bernoulli distribution with l(f) probability of true.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.CategoricalLikelihood","page":"Home","title":"GPLikelihoods.CategoricalLikelihood","text":"CategoricalLikelihood(l::AbstractLink=SoftMaxLink())\n\nCategorical likelihood is to be used if we assume that the  uncertainity associated with the data follows a Categorical distribution.\n\n    p(yf_1 f_2 dots f_n-1) = Categorical(y  l(f_1 f_2 dots f_n-1 0))\n\nGiven an AbstractVector [f1, f2, ..., f{n-1}], returns a Categorical distribution, with probabilities given by `l(f1, f2, ..., f{n-1}, 0)`.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.ExpLink","page":"Home","title":"GPLikelihoods.ExpLink","text":"ExpLink()\n\nexp link, f:ℝ->ℝ⁺. Its inverse is the LogLink.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.ExponentialLikelihood","page":"Home","title":"GPLikelihoods.ExponentialLikelihood","text":"ExponentialLikelihood(l::AbstractLink=ExpLink())\n\nExponential likelihood with scale given by l(f).\n\n    p(yf) = Exponential(y  l(f))\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.GammaLikelihood","page":"Home","title":"GPLikelihoods.GammaLikelihood","text":"GammaLikelihood(α::Real=1.0, invlink::AbstractLink=ExpLink())\n\nGamma likelihood with fixed shape α.\n\n    p(yf) = Gamma(y  α l(f))\n\nOn calling, this would return a Gamma distribution with shape α and scale invlink(f).\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.GaussianLikelihood","page":"Home","title":"GPLikelihoods.GaussianLikelihood","text":"GaussianLikelihood(σ²)\n\nGaussian likelihood with σ² variance. This is to be used if we assume that the uncertainity associated with the data follows a Gaussian distribution.\n\n    p(yf) = Normal(y  f σ²)\n\nOn calling, this would return a normal distribution with mean f and variance σ².\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.HeteroscedasticGaussianLikelihood","page":"Home","title":"GPLikelihoods.HeteroscedasticGaussianLikelihood","text":"HeteroscedasticGaussianLikelihood(l::AbstractLink=ExpLink())\n\nHeteroscedastic Gaussian likelihood.  This is a Gaussian likelihood whose mean and variance are functions of latent processes.\n\n    p(yf g) = Normal(y  f sqrt(l(g)))\n\nOn calling, this would return a normal distribution with mean f and variance l(g). Where l is link going from R to R^+\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.InvLink","page":"Home","title":"GPLikelihoods.InvLink","text":"InvLink()\n\ninv link, f:ℝ/{0}->ℝ/{0}. It is its own inverse.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.Link","page":"Home","title":"GPLikelihoods.Link","text":"Link(f)\n\nGeneral construction for a link with a function f.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.LogLink","page":"Home","title":"GPLikelihoods.LogLink","text":"LogLink()\n\nlog link, f:ℝ⁺->ℝ . Its inverse is the ExpLink.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.LogisticLink","page":"Home","title":"GPLikelihoods.LogisticLink","text":"LogisticLink()\n\nexp(x)/(1+exp(-x)) link. f:ℝ->[0,1]. Its inverse is the Logit.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.LogitLink","page":"Home","title":"GPLikelihoods.LogitLink","text":"LogitLink()\n\nlog(x/(1-x)) link, f:[0,1]->ℝ. Its inverse is the LogisticLink.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.NormalCDFLink","page":"Home","title":"GPLikelihoods.NormalCDFLink","text":"NormalCDFLink()\n\nϕ(y) link, where ϕ is the cdf of a Normal distribution, f:ℝ->[0,1]. Its inverse is the ProbitLink.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.PoissonLikelihood","page":"Home","title":"GPLikelihoods.PoissonLikelihood","text":"PoissonLikelihood(l::AbstractLink=ExpLink())\n\nPoisson likelihood with rate defined as l(f).\n\n    p(yf) = Poisson(y  θ=l(f))\n\nThis is to be used if  we assume that the uncertainity associated with the data follows a Poisson distribution.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.ProbitLink","page":"Home","title":"GPLikelihoods.ProbitLink","text":"ProbitLink()\n\nϕ⁻¹(y) link, where ϕ⁻¹ is the invcdf of a Normal distribution, f:[0,1]->ℝ. Its inverse is the NormalCDFLink.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.SoftMaxLink","page":"Home","title":"GPLikelihoods.SoftMaxLink","text":"SoftMaxLink()\n\nsoftmax link, i.e f(x)ᵢ = exp(xᵢ)/∑ⱼexp(xⱼ). f:ℝⁿ->Sⁿ⁻¹, where Sⁿ⁻¹ is an (n-1)-simplex It has no defined inverse\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.SqrtLink","page":"Home","title":"GPLikelihoods.SqrtLink","text":"SqrtLink()\n\nsqrt link, f:ℝ⁺∪{0}->ℝ⁺∪{0}. Its inverse is the SquareLink.\n\n\n\n\n\n","category":"type"},{"location":"#GPLikelihoods.SquareLink","page":"Home","title":"GPLikelihoods.SquareLink","text":"SquareLink()\n\n^2 link, f:ℝ->ℝ⁺∪{0}. Its inverse is the SqrtLink.\n\n\n\n\n\n","category":"type"}]
}
