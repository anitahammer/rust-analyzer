searchState.loadedDescShard("span", 0, "File and span related types.\nMaps items’ <code>SyntaxNode</code>s to <code>ErasedFileAstId</code>s and back.\nSee crates\\hir-expand\\src\\ast_id_map.rs This is a type …\nFileId used as the span for syntax node fixups. Any Span …\n<code>AstId</code> points to an AST node in a specific file.\nHandle to a file in <code>Vfs</code>\nInput to the analyzer is a set of files, where each file …\n<code>MacroCallId</code> identifies a particular macro invocation, like …\nIdentifier produced by an opaque expansion is always …\nThe root context, which is the parent of all other …\nThe root ast id always points to the encompassing file, …\nIdentifier produced by a semi-transparent expansion may be …\nSpans represent a region of code, used by the IDE to be …\nMaps absolute text ranges for the corresponding file to …\nA syntax context describes a hierarchy tracking order of …\nInterned <code>SyntaxContextData</code>.\nA range in text, represented as a pair of <code>TextSize</code>.\nA measure of text length. Also, equivalently, an index …\nA property of a macro expansion that determines how …\nIdentifier produced by a transparent expansion is always …\nCreates a real file span map that returns absolute ranges …\nThe anchor this span is relative to.\nThe anchor this span is relative to.\nCreate a new <code>TextRange</code> with the given <code>offset</code> and <code>len</code> (…\nAdd an offset to this range.\nChecked addition. Returns <code>None</code> if overflow occurred.\nSubtract an offset from this range.\nChecked subtraction. Returns <code>None</code> if overflow occurred.\nCheck if this range contains an offset.\nCheck if this range contains an offset.\nCheck if this range completely contains another range.\nExtends the range to cover <code>other</code> as well.\nExtends the range to cover <code>other</code> offsets as well.\nThe syntax context of the span.\nThe syntax context of the span.\nCreate a zero-length range at the specified offset (…\nCreates a new empty <code>SpanMap</code>.\nThe end point of this range.\nFinalizes the <code>SpanMap</code>, shrinking its backing storage and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a <code>SyntaxContextId</code> from a raw <code>u32</code>. This should …\nThe range covered by both ranges, if it exists. If the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDeconstruct a <code>SyntaxContextId</code> into a raw <code>u32</code>. This should …\nCheck if this range is empty.\nThe size of this range.\nIndex of the matched macro arm on successful expansion for …\nCreates a new <code>TextRange</code> with the given <code>start</code> and <code>end</code> (…\nCreates a new instance of <code>TextSize</code> from a raw <code>u32</code>.\nThe text size of some primitive text-like object.\nThis context, but with all transparent and …\nThis context, but with all transparent expansions filtered …\nRelative order of the two ranges (overlapping ranges are …\nInvariant: Only <code>SyntaxContextId::ROOT</code> has a <code>None</code> outer …\nPushes a new span onto the <code>SpanMap</code>.\nThe text range of this span, relative to the anchor. We …\nThe text range of this span, relative to the anchor. We …\nReturns all <code>TextRange</code>s whose spans contain the given span.\nReturns all <code>TextRange</code>s that correspond to the given span.\nThe [<code>AstId</code>] of the root node\nReturns the span at the given position.\nReturns the spans associated with the given range. In …\nThe start point of this range.\nCreate a range up to the given end (<code>..end</code>).")