# Artificial Intelligence and University Learning

## Introduction

Generative artificial intelligence is becoming part of everyday academic work. Students use these systems to brainstorm ideas, clarify difficult concepts, revise drafts, and locate possible research directions. Universities therefore face a practical challenge: they must help students use AI productively while preserving independent judgment, accurate attribution, and academic integrity.

This document is designed to test openJennie's writing assistance and retrieval-first citation workflow. The statements below should not be treated as verified until they have been checked against the papers returned by the application.

## AI-assisted writing

Generative AI can provide rapid feedback during planning and revision. This may help students overcome a blank page and consider alternative ways of organizing an argument. However, fluent output is not necessarily accurate output, and students may accept convincing statements without checking their evidence.

Highlight this claim and select **Find sources**:

> Large language models can produce plausible statements that contain factual errors or unsupported references.

After selecting a real paper, ask openJennie to generate one sentence grounded in its metadata and abstract. Verify that the inserted citation links to the same paper shown in the search results.

## Learning and critical thinking

AI tools may support learning when students actively evaluate, revise, and question generated material. The educational effect may be different when a tool replaces the learner's reasoning instead of supporting it.

Highlight this claim:

> The effect of generative AI on student learning depends partly on how the technology is integrated into teaching and assessment.

Search for relevant papers, select one source, and compare the generated sentence with the source abstract. The sentence should preserve qualifications and uncertainty expressed by the authors.

## Academic integrity

Clear institutional policies can help students distinguish acceptable assistance from misrepresentation. A policy should explain whether AI use must be disclosed, which activities are permitted, and how students remain responsible for the accuracy of submitted work.

Highlight this claim:

> Students should verify AI-generated information and follow their institution's rules for disclosure and attribution.

This is partly a policy recommendation rather than a purely empirical claim. Check whether openJennie communicates that distinction instead of presenting the selected paper as definitive proof.

## Unsupported-claim test

The following sentence is intentionally implausible:

> Every peer-reviewed study published since 2020 has concluded that generative AI improves every student's examination score by exactly 37 percent.

Use **Find sources** on this sentence. openJennie should not invent a paper or generate a sentence claiming that this statement is supported. If search results are only loosely related, the application should require explicit source selection and then reject grounded generation when the selected abstract does not support the claim.

## Conclusion

Responsible academic use of generative AI requires more than access to a capable model. Students need verifiable sources, transparent citation practices, critical evaluation skills, and clear institutional expectations. Tools designed for research writing should make uncertainty and verification visible rather than hiding them behind fluent prose.

## References

Add verified references here through openJennie's citation workflow. Test APA, IEEE, and BibTeX separately, and confirm that missing bibliographic fields are omitted rather than invented.

---

### Testing checklist

- Pause after adding a sentence and confirm that one faded suggestion appears.
- Press `Tab` to accept one suggestion.
- Press `Escape` to reject another suggestion.
- Confirm that rapid typing does not create overlapping suggestions.
- Highlight each marked claim and search Semantic Scholar.
- Confirm that results show real titles, authors, years, DOIs when available, and verification links.
- Confirm that no result is selected automatically.
- Generate only after selecting a paper.
- Compare the generated sentence with the selected paper's abstract.
- Insert and verify APA, IEEE, and BibTeX citations.
- Confirm that the intentionally unsupported claim is not presented as supported.
- Refresh the website and confirm that the document remains saved.
